# 🔳 QR Code Generator

**Instant QR Code Generator from Text & URLs**

*Type anything. Get a QR code. Share instantly.*

[![Live Demo](https://img.shields.io/badge/🔗_Live_Demo-QR_Generator-FF6B6B?style=for-the-badge)](https://your-demo-link.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-F59E0B?style=for-the-badge)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/Anas-Sd/QR_Code_Generator?style=for-the-badge&color=gold)](https://github.com/Anas-Sd/QR-Code-Generator)
[![GitHub Forks](https://img.shields.io/github/forks/Anas-Sd/QR_CODE_GENERATOR?style=for-the-badge&color=8B5CF6)](https://github.com/Anas-Sd/QR-Code-Generator)

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![API](https://img.shields.io/badge/QR_Code_API-000000?style=flat-square&logo=qrcode&logoColor=white)

---

## 🧬 What is QR Code Generator?

> QR codes are everywhere — now you can create them in seconds. **QR Code Generator** turns any text or URL into a scannable code instantly.

A **clean, client-side tool** that converts user input into QR codes using an external API — no signups, no limits, no complexity.

```javascript
const qrGenerator = {
    input: "Text or URL",
    output: "🔳 Scannable QR code",
    stack: ["HTML", "CSS", "JavaScript"],
    api: "QR Code Generation API",
    status: "🟢 Live"
};

function generateQR(text) {
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`;
    qrImage.src = apiUrl; // 🔳 QR code rendered
}
```

---

## ✨ Features

| | Feature | Description |
|:---:|:---|:---|
| 🔳 | **QR from Text** | Convert any plain text into a QR code |
| 🔗 | **QR from URLs** | Turn links into scannable QR codes |
| ⚡ | **Instant Rendering** | QR codes generate in real-time as you type |
| 🔄 | **Dynamic Updates** | Input changes reflect immediately |
| 🎨 | **Clean Interface** | Minimal UI focused on functionality |
| 📱 | **Mobile Friendly** | Responsive design across all devices |

---

## 🛠️ Tech Stack

### 🌐 Frontend

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### 📡 API

![QR Code API](https://img.shields.io/badge/QR_Code_API-000000?style=for-the-badge&logo=qrcode&logoColor=white)

> External API handles QR generation. Zero server-side code needed.

---

## 🔄 How It Works

```
┌─────────────────┐     ┌──────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   User Input     │ ──▶ │   API Request     │ ──▶ │   Generate QR     │ ──▶ │  Display Image   │
│                 │     │                  │     │                  │     │                 │
│ • Enter text    │     │ • Build API URL  │     │ • API processes  │     │ • Render QR img │
│ • Paste URL     │     │ • Encode input   │     │ • Create QR code │     │ • Ready to scan │
│ • Click submit  │     │ • Send request   │     │ • Return image   │     │                 │
└─────────────────┘     └──────────────────┘     └──────────────────┘     └─────────────────┘
```

---

## 🎯 Learning Focus

| | Highlight |
|:---:|:---|
| 📡 | **API request handling** — Constructing dynamic API URLs with user input |
| 🌐 | **External services** — Integrating third-party APIs into web apps |
| 🖼️ | **Dynamic image rendering** — Loading and displaying API-generated images |
| 📥 | **Input-driven UI** — Building reactive interfaces based on user actions |

---

## 📁 Project Structure


```
QR-Code-Generator/
├── 📄 index.html          # Main HTML structure
├── 📂 css/
│   └── 📄 style.css       # Styling & responsive layout
├── 📂 js/
│   └── 📄 script.js       # QR generation logic & API calls
├── 📂 assets/
│   └── 📂 images/         # Icons & placeholder assets
├── 📄 LICENSE
└── 📄 README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Any modern web browser
- Active internet connection (for API calls)

### Installation

```bash
# Clone the repository
git clone https://github.com/Anas-Sd/QR-Code-Generator.git

# Navigate to the project
cd QR-Code-Generator

# Open in browser
open index.html
# or simply double-click index.html
```

> 💡 **No dependencies!** Just open the file and start generating QR codes.

---

## 📡 API Reference


### `GET /v1/create-qr-code/`

| Parameter | Type | Description |
|:----------|:-----|:------------|
| `data` | `string` | **Required** — Text or URL to encode |
| `size` | `string` | Optional — Dimensions (e.g., `200x200`) |
| `format` | `string` | Optional — Output format (`png`, `svg`) |

**Example:**
```
https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://syedanas.me
```

---


## 📬 Let's Connect!

<p align="center">
<a href="https://github.com/Anas-Sd"><img src="https://img.shields.io/badge/GitHub-Anas--Sd-181717?style=for-the-badge&logo=github&logoColor=white"/></a>
<a href="https://www.linkedin.com/in/syedanas-sd"><img src="https://img.shields.io/badge/LinkedIn-Syed_Anas-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"/></a>
<a href="mailto:sdanasbtech@gmail.com"><img src="https://img.shields.io/badge/Email-sdanasbtech@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white"/></a>
<a href="https://syedanas.me"><img src="https://img.shields.io/badge/Portfolio-syedanas.me-00D9FF?style=for-the-badge&logo=google-chrome&logoColor=white"/></a>
</p>

<p align="center">
📍 <strong>India</strong> | 🕐 <strong>IST (UTC+5:30)</strong> | ✅ <strong>Open for Opportunities</strong>
</p>

---

## ⚖️ License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for details.

---

<p align="center">

### 💬 "Every link deserves a QR code."

</p>

<p align="center">
<strong>⭐ If you found this useful, give it a star!</strong>
</p>

<p align="center">
<strong>From <a href="https://github.com/Anas-Sd">SYED ANAS</a> with ❤️</strong>
</p>
