# 🛡️ ThreatScan - Modern Malware Detection Web Interface

**ThreatScan** is a fast, simple, and powerful web-based malware detection platform. Built with a clean green-black cybersecurity UI, it allows users to upload files and instantly receive threat analysis reports powered by heuristic rules, file signature checks, and optional API integrations.

🔗 Live Demo: [https://threatscan.vercel.app](https://threatscan.vercel.app)

---

## 🔍 Features

- **File Upload Interface** – Drag & drop or browse to upload suspicious files
- **Real-Time Scanning** – Progress-tracked threat analysis on the spot
- **Threat Categorization** – Clean, Suspicious, or Malicious status
- **Threat Score** – Accurate scoring from 0–100 with visual indicators
- **Heuristic Analysis** – Detects encoded payloads, reverse shells, suspicious strings
- **Detailed Reports** – Downloadable TXT & PDF reports with full scan details
- **Dark Cyber UI** – Built with a green-black gradient design

---

## ⚙️ Tech Stack

- **Frontend**: TypeScript, JavaScript, Next.js 15
- **Styling**: Tailwind CSS
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: Lucide React
- **Deployment**: Vercel

---

## 🛠 Tools & Libraries

- file-type – Detects MIME and magic bytes to confirm real file format

- js-sha256 / crypto – Generates SHA-256 hash for threat fingerprinting

- whois-json (optional) – Checks domain metadata for embedded URLs

- phishtank-api (optional) – Detects phishing links in documents or scripts

- pe-parser, binparse, pe-library – For PE header inspection (in backend)

---

## 🙋‍♀️ Built By
Daksh — dakshsachdeva0026@gmail.com

---

### Installation

```bash
git clone https://github.com/daksbhai/Threat-Scan.git
cd Threat-Scan
npm install
npm run dev
