<div align="center">

# ⚡ KTU Marks & Attendance Auto-Filler

### Smart • Secure • Simple Academic Data Entry Automation

A lightweight Chrome extension that automates the transfer of student attendance percentages and internal marks from Excel spreadsheets directly into the official KTU e-Governance portal.

<br>

[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-4285F4?style=for-the-badge\&logo=googlechrome\&logoColor=white)](https://developer.chrome.com/docs/extensions/)
[![Manifest V3](https://img.shields.io/badge/Manifest-V3-34A853?style=for-the-badge\&logo=googlechrome\&logoColor=white)](https://developer.chrome.com/docs/extensions/mv3/intro/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![KTU Portal](https://img.shields.io/badge/Portal-KTU-0B7285?style=for-the-badge)](https://app.ktu.edu.in/)

<br>

<a href="https://github.com/aruncx/ktumarksfiller/archive/refs/heads/main.zip">
  <img src="https://img.shields.io/badge/⬇%20DOWNLOAD%20EXTENSION-Get%20ZIP%20File-16A34A?style=for-the-badge" alt="Download Extension">
</a>

<br><br>

**No Chrome Web Store installation required. Download, extract and load the extension manually.**

[Repository](https://github.com/aruncx/ktumarksfiller) · [Report an Issue](https://github.com/aruncx/ktumarksfiller/issues)

</div>

---

## 🎯 About the Project

Entering student attendance percentages and internal marks manually into the KTU portal can be repetitive and time-consuming, particularly when handling large classes.

**KTU Marks & Attendance Auto-Filler** is designed to simplify this process by transferring student data directly from Excel to the corresponding fields in the KTU e-Governance portal.

Developed for faculty members of colleges affiliated with **APJ Abdul Kalam Technological University (KTU)**, this tool helps reduce repetitive typing, minimise data-entry errors and improve academic workflow efficiency.

### 💡 Why This Extension?

| Challenges in Manual Entry          | How This Extension Helps               |
| ----------------------------------- | -------------------------------------- |
| ⏳ 20–30 minutes for a course        | ⚡ Transfers data within seconds        |
| ❌ Risk of typing errors             | 🎯 Automated field population          |
| 🔄 Different student sorting orders | 🔍 University Register Number matching |
| 📋 Repetitive copy-and-type work    | 📊 Direct Excel clipboard integration  |
| ⚠️ Manual eligibility checking      | ✅ Triggers portal validation functions |

---

## ✨ Key Features

<table>
<tr>
<td width="50%" valign="top">

### ⚡ One-Click Excel Transfer

Copy four columns from Excel, paste them into the extension and execute Auto-Fill.

</td>
<td width="50%" valign="top">

### 🎯 Smart Register Number Matching

Matches students using their University Register Numbers to avoid sorting mismatches.

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 🔎 Fallback Name Matching

Uses student names as a secondary matching mechanism when a register number has a character discrepancy.

</td>
<td width="50%" valign="top">

### ✅ Automatic Portal Validation

Triggers native `input`, `change` and `blur` events to update portal validation functions.

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 🔒 Privacy-Focused Operation

Processes student information locally in the browser without transmitting records to an external server.

</td>
<td width="50%" valign="top">

### 🚀 Simple Interface

A straightforward workflow designed to make repetitive academic data entry easier.

</td>
</tr>
</table>

---

## 🔄 How It Works

<div align="center">

### Excel → Extension → KTU Portal

|                   STEP 1                   |                STEP 2               |                       STEP 3                       |
| :----------------------------------------: | :---------------------------------: | :------------------------------------------------: |
|                     📊                     |                  ⚡                  |                         🎓                         |
|             **Copy Excel Data**            |          **Run Auto-Fill**          |                **Verify KTU Portal**               |
| Select and copy the four required columns. | Paste the data and click Auto-Fill. | Check the populated attendance and internal marks. |

</div>

---

## 📥 Download & Installation

### Step 1 — Download the Extension

<div align="center">

<a href="https://github.com/aruncx/ktumarksfiller/archive/refs/heads/main.zip">
  <img src="https://img.shields.io/badge/⬇%20DOWNLOAD%20NOW-Extension%20ZIP-16A34A?style=for-the-badge&logo=github&logoColor=white" alt="Download Extension ZIP">
</a>

**Download the latest available source code as a ZIP file.**

</div>

Alternatively, visit the [GitHub Repository](https://github.com/aruncx/ktumarksfiller), click the green **Code** button and select **Download ZIP**.

### Step 2 — Extract the ZIP File

1. Locate the downloaded ZIP file.
2. Right-click and select **Extract All**.
3. Open the extracted `ktumarksfiller` folder.
4. Make sure that `manifest.json` is available inside the folder.

### Step 3 — Open Browser Extensions

Open the appropriate extensions page:

| Browser           | Extensions Page       |
| ----------------- | --------------------- |
| 🌐 Google Chrome  | `chrome://extensions` |
| 🌐 Microsoft Edge | `edge://extensions`   |
| 🦁 Brave Browser  | `brave://extensions`  |

### Step 4 — Enable Developer Mode

1. Open the extensions page.
2. Enable **Developer mode** using the toggle in the top-right corner.
3. Click **Load unpacked**.
4. Select the extracted `ktumarksfiller` folder containing `manifest.json`.

### Step 5 — Pin the Extension

Once installed, locate the extension in your browser toolbar and pin it for convenient access.

<div align="center">

🎉 **Installation Completed!**

Your KTU Marks & Attendance Auto-Filler is ready to use.

</div>

---

## 📊 How to Use

### 1. Prepare Your Excel Data

Arrange your student information in the following four-column format:

| University Register Number | Student Name     | Attendance % | Internal Mark |
| :------------------------- | :--------------- | :----------: | :-----------: |
| `VAS24EE002`               | ABHIJITH JAYARAJ |      95      |       49      |
| `VAS24EE003`               | ABHINAV P V      |      92      |       48      |
| `VAS24EE004`               | ABIRAM M J       |      65      |       31      |
| `VAS24EE005`               | ADHARSH P P      |      92      |       53      |

**Important:**

* Maintain the specified four-column order.
* You can copy the data with or without the header row.
* The extension automatically ignores recognised headers such as University No and Attendance.

### 2. Copy the Student Records

1. Open your Excel spreadsheet.
2. Select the four columns containing the student records.
3. Press `Ctrl + C` to copy the selected data.

### 3. Open the KTU Portal

1. Log in to the [KTU e-Governance Portal](https://app.ktu.edu.in/).
2. Navigate to the appropriate Student Attendance / Internals entry page.
3. Select the relevant course.

### 4. Execute Auto-Fill

1. Click the KTU Marks & Attendance Auto-Filler extension icon.
2. Paste the copied Excel data using `Ctrl + V`.
3. Check the student count displayed in the preview.
4. Click **⚡ Auto-Fill Portal Fields**.
5. Allow the extension to populate the corresponding portal fields.

### 5. Verify Before Submission

Check the attendance percentages, internal marks and eligibility status displayed on the portal.

**Always perform a manual verification before clicking Submit or Save.**

---

## 🔐 Privacy & Security

Student academic information requires careful handling.

The extension is designed with a privacy-focused, client-side approach.

* 🔒 All processing takes place within your local browser session.
* 🚫 Student records are not transmitted to an external server.
* 🚫 No student data or portal credentials are sent to the developer.
* 💻 The extension works with the data supplied by the user.

**Your data stays within your local browser workflow.**

---

## 🛠️ Technology Stack

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square\&logo=html5\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square\&logo=javascript\&logoColor=black)
![Chrome Extensions](https://img.shields.io/badge/Chrome_Extensions-4285F4?style=flat-square\&logo=googlechrome\&logoColor=white)
![Manifest V3](https://img.shields.io/badge/Manifest-V3-34A853?style=flat-square)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square\&logo=github\&logoColor=white)

</div>

### Repository Structure

```text
ktumarksfiller/
│
├── manifest.json       # Chrome Extension Manifest V3 configuration
├── popup.html          # Extension user interface
├── popup.js            # Data parsing and portal interaction logic
│
├── icon16.png          # Toolbar icon
├── icon48.png          # Extension management icon
├── icon128.png         # High-resolution extension icon
│
└── README.md           # Project documentation
```

---

## ⚠️ Important Disclaimer

> **MANDATORY MANUAL VERIFICATION**
>
> This extension is an assistive productivity tool developed to reduce repetitive manual data entry.
>
> The KTU e-Governance portal may undergo changes to its interface, HTML structure or validation scripts. Such changes may affect the functionality of this extension.
>
> Faculty members are responsible for manually verifying all populated attendance percentages, internal marks and eligibility details before clicking the final Submit / Save button.
>
> The developer assumes no responsibility or liability for data-entry discrepancies, submission errors or academic consequences arising from the use of this extension.

---

## 👨‍💻 Developer & Credits

<div align="center">

### Developed with ❤️ for the KTU Faculty Community

**Arun Xavier**

Assistant Professor
Department of Electrical & Electronics Engineering (EEE)

**Vidya Academy of Science & Technology**
Thrissur, Kerala, India

[![GitHub](https://img.shields.io/badge/GitHub-@aruncx-181717?style=for-the-badge\&logo=github)](https://github.com/aruncx)

</div>

---

## 📄 License

This project is distributed under the **MIT License**.

See the [LICENSE](LICENSE) file for details.

---

<div align="center">

### ⚡ Less Manual Work. More Academic Productivity.

If you find this extension useful, consider giving the repository a ⭐ on GitHub.

[![GitHub Stars](https://img.shields.io/github/stars/aruncx/ktumarksfiller?style=social)](https://github.com/aruncx/ktumarksfiller)

**Thank you for supporting open-source academic automation!**

</div>
