<div align="center">

# ⚡ KTU Marks & Attendance Auto-Filler

### Smart • Secure • Simple Academic Data Entry Automation

A lightweight Chrome extension designed to help faculty members transfer student attendance percentages and internal/sessional marks directly from Excel spreadsheets into the official KTU e-Governance portal.

<br>

[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-4285F4?style=for-the-badge\&logo=googlechrome\&logoColor=white)](https://developer.chrome.com/docs/extensions/)
[![Manifest V3](https://img.shields.io/badge/Manifest-V3-34A853?style=for-the-badge)](https://developer.chrome.com/docs/extensions/mv3/intro/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![KTU Portal](https://img.shields.io/badge/Portal-KTU-0B7285?style=for-the-badge)](https://app.ktu.edu.in/)

<br>

<a href="https://github.com/aruncx/ktumarksfiller/archive/refs/heads/main.zip">
<img src="https://img.shields.io/badge/⬇%20DOWNLOAD%20EXTENSION-GET%20ZIP%20FILE-16A34A?style=for-the-badge&logo=github&logoColor=white" alt="Download Extension">
</a>

<br><br>

**No Chrome Web Store installation required!**

Download the ZIP file, extract it and install using Developer Mode.

[📂 GitHub Repository](https://github.com/aruncx/ktumarksfiller) · [🐛 Report an Issue](https://github.com/aruncx/ktumarksfiller/issues)

</div>

---

## 📌 About the Project

Entering student attendance percentages and internal marks manually into the KTU portal can be repetitive and time-consuming, particularly when handling large classes.

**KTU Marks & Attendance Auto-Filler** simplifies this process by transferring student information directly from Excel spreadsheets into the corresponding input fields in the KTU e-Governance portal.

Developed for faculty members of colleges affiliated with **APJ Abdul Kalam Technological University (KTU)**, this tool helps reduce repetitive typing, minimise data-entry errors and improve academic workflow efficiency.

### 🎯 Problem & Motivation

Manual entry of attendance and internal marks involves several challenges:

| Challenge                                      | Solution                               |
| ---------------------------------------------- | -------------------------------------- |
| ⏳ 20–30 minutes of repetitive entry per course | ⚡ Automated transfer within seconds    |
| ❌ Risk of typing errors                        | 🎯 Automated field population          |
| 🔄 Different student sorting orders            | 🔍 University Register Number matching |
| 📋 Repeated copy-and-type operations           | 📊 Direct Excel clipboard integration  |
| ⚠️ Manual eligibility checking                 | ✅ Triggers portal validation functions |

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

Matches students using their University Register Numbers, reducing errors caused by different sorting orders.

</td>
<tr>
<td width="50%" valign="top">

### ✅ Automatic Portal Validation

Triggers native `input`, `change` and `blur` events to update the portal's validation functions:

* `checkAttendance`
* `checkEligibility`

</td>
</tr>

<tr>
<td width="50%" valign="top">

### 🔒 Privacy-Focused Operation

Processes student information locally in the browser without transmitting records to an external server.

</td>
<td width="50%" valign="top">

### 🚀 Simple User Interface

A straightforward workflow designed to make repetitive academic data entry easier.

</td>
</tr>
</table>

---

## 🔄 How It Works

<div align="center">

### Excel → Extension → KTU Portal

|                   STEP 1                   |                STEP 2               |                       STEP 3                      |
| :----------------------------------------: | :---------------------------------: | :-----------------------------------------------: |
|                     📊                     |                  ⚡                  |                         🎓                        |
|             **Copy Excel Data**            |          **Run Auto-Fill**          |               **Verify KTU Portal**               |
| Select and copy the four required columns. | Paste the data and click Auto-Fill. | Check attendance, internal marks and eligibility. |

</div>

---

# 📥 Download & Installation Guide

## STEP 1 — Download the Extension

<div align="center">

### ⬇️ DOWNLOAD KTU MARKS & ATTENDANCE AUTO-FILLER

<a href="https://github.com/aruncx/ktumarksfiller/archive/refs/heads/main.zip">
<img src="https://img.shields.io/badge/DOWNLOAD%20EXTENSION-CLICK%20HERE-16A34A?style=for-the-badge&logo=github&logoColor=white" alt="Download Extension ZIP">
</a>

**Download the extension ZIP file directly from GitHub.**

</div>

Alternatively:

1. Visit the [KTU Marks & Attendance Auto-Filler GitHub Repository](https://github.com/aruncx/ktumarksfiller).
2. Click the green **Code** button.
3. Select **Download ZIP**.

## STEP 2 — Extract the ZIP File

After downloading:

1. Locate the downloaded ZIP file on your computer.
2. Right-click the file.
3. Select **Extract All**.
4. Open the extracted `ktumarksfiller` folder.
5. Confirm that the folder contains `manifest.json`.

**Important:** Remember the location of this extracted folder. You will need it during installation.

---

## STEP 3 — Open Browser Extensions

Open the extensions management page in your browser.

| Browser           | Extensions Page       |
| ----------------- | --------------------- |
| 🌐 Google Chrome  | `chrome://extensions` |
| 🌐 Microsoft Edge | `edge://extensions`   |
| 🦁 Brave Browser  | `brave://extensions`  |

Copy the appropriate address and paste it into your browser's address bar.

---

<div align="center">

# ⚠️ IMPORTANT INSTALLATION STEP

## STEP 4 — ENABLE DEVELOPER MODE & LOAD UNPACKED

**This is the MOST IMPORTANT installation step. Follow these instructions carefully to install the extension successfully.**

</div>

### ① Enable Developer Mode

Once you open the browser's Extensions page:

* Locate the **Developer mode** toggle.
* It is normally available in the top-right corner.
* Switch **Developer mode → ON**.

<div align="center">

![Developer Mode](https://img.shields.io/badge/DEVELOPER%20MODE-ENABLE%20ON-16A34A?style=for-the-badge\&logo=googlechrome\&logoColor=white)

</div>

### ② Click the Load Unpacked Button

After enabling Developer Mode, additional options will appear on the Extensions page.

Locate and click:

<div align="center">

![Load Unpacked](https://img.shields.io/badge/LOAD%20UNPACKED-CLICK%20HERE-4285F4?style=for-the-badge\&logo=googlechrome\&logoColor=white)

</div>

### ③ Select the Extracted Extension Folder

A folder selection window will appear.

1. Browse to the location where you extracted the downloaded ZIP file.
2. Open the extracted `ktumarksfiller` folder.
3. Select the folder containing `manifest.json`.
4. Click **Select Folder**.

> ⚠️ **Important:** Select the actual extension folder containing `manifest.json`, not the ZIP file or its parent folder.

### ④ Installation Completed!

Once the folder is selected, the extension should appear in your browser's installed extensions list.

<div align="center">

![Installed](https://img.shields.io/badge/STATUS-INSTALLED-16A34A?style=for-the-badge\&logo=googlechrome\&logoColor=white)

### 🎉 Congratulations!

**KTU Marks & Attendance Auto-Filler is now successfully installed.**

</div>

> **Remember:** Developer Mode must remain enabled for the manually loaded extension to work. Your browser may display a warning about developer-mode extensions; this is normal for an unpacked extension.

---

## STEP 5 — Pin the Extension to Your Browser Toolbar

For convenient access:

1. Click the **Extensions (🧩)** icon in your browser toolbar.
2. Locate **KTU Marks & Attendance Auto-Filler**.
3. Click the Pin icon 📌.
4. The extension icon will now be visible in your browser toolbar.

<div align="center">

### 🚀 INSTALLATION COMPLETED!

Your extension is installed and ready to use.

</div>

---

# 📊 How to Use the Extension

## STEP 1 — Prepare Your Excel Data

Arrange your student information using the following four-column format:

| Column 1: University Register Number | Column 2: Student Name | Column 3: Attendance % | Column 4: Internal Mark |
| ------------------------------------ | ---------------------- | :--------------------: | :---------------------: |
| `VAS24EE002`                         | ABHIJITH JAYARAJ       |           95           |            49           |
| `VAS24EE003`                         | ABHINAV P V            |           92           |            48           |
| `VAS24EE004`                         | ABIRAM M J             |           65           |            31           |
| `VAS24EE005`                         | ADHARSH P P            |           92           |            53           |

### Excel Data Guidelines

* Maintain the specified four-column order.
* Select all the required student records.
* You can copy the data with or without the header row.
* The extension automatically ignores recognised headers such as University No and Attendance.
* Ensure that register numbers and marks are correct before copying.

## STEP 2 — Copy the Student Records

1. Open your Excel spreadsheet.
2. Select the four columns containing student information.
3. Press `Ctrl + C` to copy the selected data.

---

## STEP 3 — 🔐 Log In to the KTU Portal

<div align="center">

### AUTHENTICATED FACULTY LOGIN IS REQUIRED

**Use your own authorised KTU faculty credentials before proceeding.**

</div>

1. Visit the official [KTU e-Governance Portal](https://app.ktu.edu.in/).
2. **Log in using your authorised faculty credentials.**
3. Ensure that you have successfully logged in to your faculty account.
4. Navigate to the appropriate **Student Attendance / Internals** entry page.
5. Select the relevant course for which you want to enter attendance and internal marks.

> 🔒 **Security Reminder:** Use your own authorised KTU faculty login credentials. Never share your username or password with anyone. The extension does not require you to share your login credentials with the developer.

---

## STEP 4 — ⚡ Execute Auto-Fill

1. Click the **KTU Marks & Attendance Auto-Filler** extension icon in your browser toolbar.
2. Paste the copied Excel data into the extension's text area using `Ctrl + V`.
3. Check the student count displayed in the preview.
4. Confirm that the number of records is correct.
5. Click **⚡ Auto-Fill Portal Fields**.
6. Allow the extension to populate the corresponding attendance and internal mark fields.

---

<div align="center">

# 🛑 STEP 5 — MANDATORY VERIFICATION BEFORE SUBMISSION

## ⚠️ VERIFY EVERY ENTRY BEFORE CLICKING SUBMIT / SAVE

**DO NOT CLICK SUBMIT / SAVE IMMEDIATELY AFTER AUTO-FILL.**

</div>

After the Auto-Fill operation is completed, faculty members **MUST manually verify every student entry on the KTU portal.**

### Verification Checklist

| Check | What to Verify                                                |
| :---: | ------------------------------------------------------------- |
|   ☐   | University Register Numbers and corresponding student records |
|   ☐   | Attendance percentages entered for every student              |
|   ☐   | Internal / Sessional marks entered for every student          |
|   ☐   | Eligibility status displayed by the KTU portal                |
|   ☐   | Missing, incorrect or mismatched entries                      |
|   ☐   | Total number of students and completed records                |

### 🚨 FINAL SUBMISSION WARNING

<div align="center">

![Verify Before Submit](https://img.shields.io/badge/IMPORTANT-VERIFY%20BEFORE%20SUBMIT-E53935?style=for-the-badge)

### ALWAYS VERIFY ALL ENTRIES BEFORE CLICKING THE FINAL SUBMIT / SAVE BUTTON.

**Only after confirming that ALL student records, attendance percentages, internal marks and eligibility details are correct should you proceed with the final submission.**

</div>

> **Remember:** Auto-Fill assists with data entry. The responsibility for verifying the accuracy of all academic records and submitting them correctly rests with the faculty member.

---

## 🔐 Privacy & Security

Student academic information requires careful handling.

The extension follows a privacy-focused, client-side approach.

| Privacy Feature              | Description                                                            |
| ---------------------------- | ---------------------------------------------------------------------- |
| 🔒 Local Processing          | Student information is processed within the local browser workflow.    |
| 🚫 No External Data Transfer | The extension does not transmit student records to an external server. |
| 🔑 Credential Privacy        | Portal credentials are not sent to the developer.                      |
| 💻 Browser-Based Operation   | The extension works with the data supplied by the faculty member.      |

**Your student data stays within your local browser workflow.**

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
> Faculty members are responsible for manually verifying all populated attendance percentages, internal marks and eligibility details on their screen before clicking the final Submit / Save button.
>
> The developer assumes no responsibility or liability for data-entry discrepancies, submission errors or academic consequences arising from the use of this extension.

---

## 👨‍💻 Developer & Credits

<div align="center">

### Developed with ❤️ for the KTU Faculty Community

# Arun Xavier

**Assistant Professor**

Department of Electrical & Electronics Engineering (EEE)

**Vidya Academy of Science & Technology**

Thrissur, Kerala, India

<br>

[![GitHub](https://img.shields.io/badge/GitHub-@aruncx-181717?style=for-the-badge\&logo=github)](https://github.com/aruncx)

</div>

---

## 📄 License

This project is open-source and distributed under the **MIT License**.

See the [LICENSE](LICENSE) file for details.

---

## ⭐ Support the Project

If you find this extension useful in your academic work:

* ⭐ Give the GitHub repository a star.
* 📢 Share it with fellow KTU faculty members.
* 💡 Suggest improvements or report issues through GitHub.

<div align="center">

[![GitHub Stars](https://img.shields.io/github/stars/aruncx/ktumarksfiller?style=social)](https://github.com/aruncx/ktumarksfiller)

### ⚡ Less Manual Work. More Academic Productivity.

**Thank you for supporting open-source academic automation!**

[⬇️ Download Extension](https://github.com/aruncx/ktumarksfiller/archive/refs/heads/main.zip) · [📂 View GitHub Repository](https://github.com/aruncx/ktumarksfiller)

</div>
