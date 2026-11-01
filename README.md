# KTU Marks & Attendance Auto-Filler



[](https://developer.chrome.com/docs/extensions/)
[](https://developer.chrome.com/docs/extensions/mv3/intro/)
[](https://app.ktu.edu.in/)
[Repository](https://www.google.com/search?q=https://github.com/aruncx/ktumarksfiller)
[License: MIT](https://www.google.com/search?q=LICENSE)

A lightweight, secure Google Chrome extension created to help faculty and teachers across colleges affiliated with **APJ Abdul Kalam Technological University (KTU)** effortlessly transfer student attendance percentages and internal/sessional marks directly from Excel spreadsheets into the official KTU e-Governance portal.

---

## 📌 Problem & Motivation

Entering student marks and attendance on the KTU portal requires typing two separate values for each student across 60+ rows per class. Manual data entry is:
* **Time-consuming**: Taking 20–30 minutes per course.
* **Error-prone**: Prone to accidental row shifts, transposed digits, or typos.
* **Sorting Mismatch Risk**: The portal's student order may differ from a teacher's Excel sheet (e.g., Roll Number vs. University Register Number vs. Alphabetical).

**KTU Marks & Attendance Auto-Filler** eliminates manual entry by parsing student records directly from your Excel clipboard and automatically populating the corresponding input fields on the portal within seconds.

---

## ⚡ Key Features

* **1-Click Excel Transfer**: Highlight your 4 columns in Excel, press `Ctrl + C`, paste into the extension, and click **Auto-Fill**.
* **Smart Register Number Matching**: Matches students strictly by their University Register Number (e.g., `VAS24EE002`, `LVAS24EE063`), making it immune to mismatched sorting or missing students.
* **Fallback Name Matching**: If a register number has a character discrepancy, it uses the student's name as a secondary check.
* **Triggers Portal Validation**: Automatically dispatches native `input`, `change`, and `blur` events so the portal's built-in calculation functions (`checkAttendance` & `checkEligibility`) update the **Eligible for Written Exam** status dynamically.
* **100% Private & Client-Side**: Operates entirely within your local browser session. No data, credentials, or student records are ever transmitted over the network or sent to any server.

---

## 📂 Repository Structure

```text
ktumarksfiller/
├── manifest.json       # Chrome Extension Manifest V3 configuration
├── popup.html          # Extension UI with format guide and developer card
├── popup.js            # Parsing engine and DOM injection logic
├── icon16.png          # 16x16 toolbar icon
├── icon48.png          # 48x48 extension management icon
├── icon128.png         # 128x128 Chrome Web Store / high-res icon
├── credits.html        # Detailed developer profile page
├── poster.jpg          # Project promotional flyer
└── README.md           # Project documentation
```

---

## 🚀 Installation Guide

### Load Unpacked in Chrome / Edge / Brave

1. **Clone or Download** this repository to your computer:
   ```bash
   git clone https://github.com/aruncx/ktumarksfiller.git
   ```
   *(Or click **Code** → **Download ZIP** from [github.com/aruncx/ktumarksfiller](https://www.google.com/search?q=https://github.com/aruncx/ktumarksfiller) and extract the folder).*

2. Open your browser and navigate to the extensions page:
   * **Google Chrome**: `chrome://extensions`
   * **Microsoft Edge**: `edge://extensions`
   * **Brave Browser**: `brave://extensions`

3. In the top-right corner, toggle **Developer mode** to **ON**.

4. In the top-left corner, click **Load unpacked**.

5. Select the `ktumarksfiller` folder containing `manifest.json`. The extension icon will now appear in your browser toolbar. Pin it for quick access!

---

## 📋 How to Use

### 1. Arrange Your Excel Columns
Select and copy your student data in Excel using the standard 4-column layout:

| Column 1: Uni Reg No | Column 2: Student Name | Column 3: Attendance % | Column 4: Internal Mark |
| :--- | :--- | :---: | :---: |
| `VAS24EE002` | `ABHIJITH JAYARAJ` | `95` | `49` |
| `VAS24EE003` | `ABHINAV P V` | `92` | `48` |
| `VAS24EE004` | `ABIRAM M J` | `65` | `31` |
| `VAS24EE005` | `ADHARSH P P` | `92` | `53` |

> **Note:** You can copy with or without the header row; the extension automatically ignores headers like *"University No"* or *"Attendance"*.

### 2. Run the Auto-Filler
1. Log in to the KTU portal (`app.ktu.edu.in`) and navigate to the **Student Attendance/Internals** entry page for your course.
2. Click the **KTU Marks Auto-Filler** extension icon in your toolbar.
3. Paste (`Ctrl + V`) your copied Excel data into the text area.
4. Verify the row count preview (e.g., `✓ Ready to fill 68 students!`).
5. Click **⚡ Auto-Fill Portal Fields**.
6. The fields will populate automatically and trigger eligibility checks.

---

## ⚠️ Important Disclaimer & Verification

> **MANDATORY VERIFICATION:**  
> This extension is an assistive productivity tool designed to reduce repetitive typing. Web portal DOM structures or university validation scripts are subject to periodic changes. **Faculty members must manually cross-check all entered attendance percentages and internal marks on their screen before clicking the final submit/save button.** The developer assumes no responsibility or liability for any data entry discrepancies, submission errors, or academic consequences resulting from the use of this tool.

---

## 👨‍💻 Developer & Credits

Designed and developed with care by:

**Arun Xavier**  
*Assistant Professor*  
Department of Electrical & Electronics Engineering (EEE)  
**Vidya Academy of Science & Technology**, Thrissur, Kerala, India  
GitHub: [@aruncx](https://www.google.com/search?q=https://github.com/aruncx)

---

## 📄 License

This project is open-source and available under the [MIT License](https://www.google.com/search?q=LICENSE).