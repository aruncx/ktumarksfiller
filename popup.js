const paste = document.getElementById('paste');
const fillBtn = document.getElementById('fillBtn');
const msg = document.getElementById('msg');
const statusPreview = document.getElementById('statusPreview');

function parseInput(text) {
  if (!text || !text.trim()) return [];
  const lines = text.split(/\r?\n/).filter(l => l.trim().length > 0);
  const records = [];

  for (const line of lines) {
    let parts = line.includes('\t') ? line.split('\t') : (line.includes(',') ? line.split(',') : line.trim().split(/\s{2,}/));
    const clean = parts.map(p => p.trim()).filter(p => p.length > 0);
    if (clean.length < 2) continue;

    // Skip header row if copied
    if (/uni|reg|roll|name|student|attend|mark|sessional/i.test(clean[0]) || /attend|mark|sessional/i.test(clean[clean.length - 1])) {
      continue;
    }

    let reg = clean[0].toUpperCase(), name = '', att = '', mark = '';
    if (clean.length >= 4) { name = clean[1]; att = clean[2]; mark = clean[3]; }
    else if (clean.length === 3) { att = clean[1]; mark = clean[2]; }
    else if (clean.length === 2) { att = clean[1]; }

    if (reg) records.push({ reg, name, att, mark });
  }
  return records;
}

function updateCount() {
  const records = parseInput(paste.value);
  if (records.length > 0) {
    statusPreview.style.color = '#15803d';
    statusPreview.innerText = `✓ Ready to fill ${records.length} students!`;
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
    msg.style.display = 'block'; msg.style.background = '#fef2f2'; msg.style.color = '#b91c1c';
    msg.innerHTML = '<strong>No student rows detected!</strong><br>Please copy your columns from Excel (Reg No, Name, Attendance, Mark) and paste them into the box.';
    return;
  }

  fillBtn.innerText = `Filling ${records.length} students...`;

  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab) {
      msg.style.display = 'block'; msg.style.background = '#fee2e2'; msg.style.color = '#b91c1c';
      msg.innerText = 'No active webpage found. Make sure the KTU mark entry tab is open.';
      fillBtn.innerText = '⚡ Auto-Fill Portal Fields';
      return;
    }

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (studentRecords) => {
        function trigger(el, v) {
          if (!el) return;
          el.focus(); el.value = v;
          el.dispatchEvent(new Event('input', { bubbles: true }));
          el.dispatchEvent(new Event('change', { bubbles: true }));
          if (typeof el.onblur === 'function') try { el.onblur(); } catch (e) {}
          el.blur();
        }

        const trs = document.querySelectorAll('tr');
        let filledCount = 0; const notFound = [];

        for (const rec of studentRecords) {
          let matched = false;
          for (const tr of trs) {
            const trText = (tr.innerText || '').toUpperCase();
            const regMatch = rec.reg && trText.includes(rec.reg);
            const nameMatch = !regMatch && rec.name && rec.name.length > 4 && trText.includes(rec.name.toUpperCase());

            if (regMatch || nameMatch) {
              matched = true;
              const inps = tr.querySelectorAll('input[type="text"], input:not([type])');
              const attIn = tr.querySelector('input[name="attendance"]') || inps[0];
              const markIn = inps.length > 1 ? inps[1] : null;

              if (attIn && rec.att !== '') trigger(attIn, rec.att);
              if (markIn && rec.mark !== '') trigger(markIn, rec.mark);
              filledCount++;
              break;
            }
          }
          if (!matched) notFound.push(rec.reg || rec.name);
        }
        return { filledCount, notFound, total: studentRecords.length };
      },
      args: [records]
    }, (res) => {
      fillBtn.innerText = '⚡ Auto-Fill Portal Fields';
      msg.style.display = 'block';
      if (!res || !res[0] || res[0].result === undefined) {
        msg.style.background = '#fee2e2'; msg.style.color = '#b91c1c';
        msg.innerText = 'Could not access the page. Please ensure you have the KTU mark entry webpage open.';
        return;
      }
      const result = res[0].result;
      if (result.filledCount > 0) {
        msg.style.background = '#dcfce7'; msg.style.color = '#15803d';
        let content = `<strong>Successfully filled ${result.filledCount} of ${result.total} students!</strong>`;
        if (result.notFound.length > 0) content += `<br><span style="color:#b91c1c;">Not found on this page: ${result.notFound.join(', ')}</span>`;
        content += `<br><br><span style="color:#b45309;font-weight:bold;">⚠️ Reminder: Please manually cross-check all values on screen before submitting.</span>`;
        msg.innerHTML = content;
      } else {
        msg.style.background = '#fee2e2'; msg.style.color = '#b91c1c';
        msg.innerText = 'No matching student rows found on this webpage. Check that the mark entry table is visible.';
      }
    });
  } catch (err) {
    fillBtn.innerText = '⚡ Auto-Fill Portal Fields';
    msg.style.display = 'block'; msg.style.background = '#fee2e2'; msg.style.color = '#b91c1c';
    msg.innerText = 'Error: ' + err.message;
  }
});