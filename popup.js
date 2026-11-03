const paste = document.getElementById('paste');
const fillBtn = document.getElementById('fillBtn');
const msg = document.getElementById('msg');
const statusPreview = document.getElementById('statusPreview');

function parseInput(text) {
  if (!text || !text.trim()) return [];
  const lines = text.split(/\r?\n/).filter(l => l.trim().length > 0);
  const records = [];

  for (const line of lines) {
    let parts;
    if (line.includes('\t')) {
      parts = line.split('\t');
    } else if (line.includes(',')) {
      parts = line.split(',');
    } else {
      parts = line.trim().split(/\s{2,}/);
    }

    const clean = parts.map(p => p.trim()).filter(p => p.length > 0);
    if (clean.length < 2) continue;

    // Skip header row if copied (e.g. "University No", "Name", "Attendance", "Marks")
    if (/uni|reg|roll|name|student|attend|mark|sessional/i.test(clean[0]) || /attend|mark|sessional/i.test(clean[clean.length - 1])) {
      continue;
    }

    let reg = clean[0].toUpperCase();
    let name = '';
    let att = '';
    let mark = '';

    if (clean.length >= 4) {
      name = clean[1];
      att = clean[2];
      mark = clean[3];
    } else if (clean.length === 3) {
      att = clean[1];
      mark = clean[2];
    } else if (clean.length === 2) {
      att = clean[1];
    }

    if (reg) {
      records.push({ reg, name, att, mark });
    }
  }
  return records;
}

function updateCount() {
  const records = parseInput(paste.value);
  if (records.length > 0) {
    statusPreview.style.color = '#15803d';
    statusPreview.innerText = `✓ Ready to fill ${records.length} students (strictly mapped by Reg No)!`;
  } else if (paste.value.trim().length > 0) {
    statusPreview.style.color = '#b45309';
    statusPreview.innerText = 'Analyzing data... Click the green button below to fill.';
  } else {
    statusPreview.style.color = '#475569';
    statusPreview.innerText = 'Waiting for data paste...';
  }
}

paste.addEventListener('input', updateCount);
paste.addEventListener('change', updateCount);
paste.addEventListener('keyup', updateCount);
paste.addEventListener('paste', () => setTimeout(updateCount, 50));

fillBtn.addEventListener('click', async () => {
  const records = parseInput(paste.value);

  if (records.length === 0) {
    msg.style.display = 'block';
    msg.style.background = '#fef2f2';
    msg.style.color = '#b91c1c';
    msg.innerHTML = '<strong>No student rows detected!</strong><br>Please copy your columns from Excel (Reg No, Attendance, Mark) and paste them into the box.';
    return;
  }

  fillBtn.innerText = `Filling ${records.length} students...`;

  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab) {
      msg.style.display = 'block';
      msg.style.background = '#fee2e2';
      msg.style.color = '#b91c1c';
      msg.innerText = 'No active webpage found. Make sure the KTU mark entry tab is open.';
      fillBtn.innerText = '⚡ Auto-Fill Portal Fields';
      return;
    }

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: async (studentRecords) => {
        const trs = Array.from(document.querySelectorAll('tr'));
        // Reset previously filled markers on the page
        trs.forEach(tr => delete tr.dataset.ktuFilled);

        let filledCount = 0;
        const notFound = [];

        for (const rec of studentRecords) {
          const cleanReg = rec.reg.trim().toUpperCase();
          let targetRow = null;

          // 1. Strictly match by University Register Number (no name matching)
          for (const tr of trs) {
            if (tr.dataset.ktuFilled === "true") continue;
            const trText = (tr.innerText || '').toUpperCase();

            if (trText.includes(cleanReg)) {
              targetRow = tr;
              break;
            }
          }

          if (targetRow) {
            targetRow.dataset.ktuFilled = "true";
            const textInputs = targetRow.querySelectorAll('input[type="text"], input:not([type])');
            const attInput = targetRow.querySelector('input[name="attendance"]') || textInputs[0];
            const markInput = textInputs.length > 1 ? textInputs[1] : null;

            // STEP A: Set BOTH values first so checkEligibility has both values available
            if (attInput && rec.att !== '') {
              attInput.value = rec.att;
            }
            if (markInput && rec.mark !== '') {
              markInput.value = rec.mark;
            }

            // STEP B: Dispatch input and change events on both fields
            [attInput, markInput].forEach(inp => {
              if (!inp) return;
              inp.dispatchEvent(new Event('input', { bubbles: true }));
              inp.dispatchEvent(new Event('change', { bubbles: true }));
            });

            // STEP C: Trigger validation handlers with both values populated
            [markInput, attInput].forEach(inp => {
              if (!inp) return;
              inp.focus();

              const onblurAttr = inp.getAttribute('onblur');
              if (onblurAttr) {
                try {
                  const scriptCode = onblurAttr.replace(/^javascript:/i, '');
                  new Function(scriptCode).call(inp);
                } catch (e) {}
              }

              if (typeof inp.onblur === 'function') {
                try { inp.onblur(); } catch (e) {}
              }

              inp.dispatchEvent(new Event('blur', { bubbles: true }));
              inp.blur();
            });

            filledCount++;
            await new Promise(r => setTimeout(r, 25)); // brief pause for calculation update
          } else {
            notFound.push(cleanReg);
          }
        }

        return { filledCount, notFound, total: studentRecords.length };
      },
      args: [records]
    }, (res) => {
      fillBtn.innerText = '⚡ Auto-Fill Portal Fields';
      msg.style.display = 'block';

      if (!res || !res[0] || res[0].result === undefined) {
        msg.style.background = '#fee2e2';
        msg.style.color = '#b91c1c';
        msg.innerText = 'Could not access the page. Please ensure you have the KTU mark entry webpage open.';
        return;
      }

      const result = res[0].result;
      if (result.filledCount > 0) {
        msg.style.background = '#dcfce7';
        msg.style.color = '#15803d';
        let content = `<strong>Successfully filled ${result.filledCount} of ${result.total} students (v1.1)!</strong>`;
        if (result.notFound.length > 0) {
          content += `<br><span style="color:#b91c1c;">Not found on this page: ${result.notFound.join(', ')}</span>`;
        }
        content += `<br><br><span style="color:#b45309;font-weight:bold;">⚠️ Reminder: Please manually cross-check all values on screen before submitting.</span>`;
        msg.innerHTML = content;
      } else {
        msg.style.background = '#fee2e2';
        msg.style.color = '#b91c1c';
        msg.innerText = 'No matching student rows found on this webpage. Check that the mark entry table is visible.';
      }
    });
  } catch (err) {
    fillBtn.innerText = '⚡ Auto-Fill Portal Fields';
    msg.style.display = 'block';
    msg.style.background = '#fee2e2';
    msg.style.color = '#b91c1c';
    msg.innerText = 'Error: ' + err.message;
  }
});