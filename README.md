# 🧾 Ethiopian Receipt Verifier

An end-to-end receipt verification and fraud prevention system designed for Ethiopian financial transactions. It empowers merchants, businesses, and individuals to instantly verify the authenticity of payment slips from major Ethiopian banks and mobile money providers, protecting them against forged receipts, edited screenshots, and transaction fraud.

---

## 🎯 Purpose and Use of the App

### The Problem
With the surge in digital banking and mobile payments in Ethiopia (via mobile apps, SMS confirmations, and printed bank slips), receipt fabrication and photoshop fraud have become widespread. Fraudsters often present altered screenshots or counterfeit branch slips to claim payment for goods or services.

### The Solution
**Ethiopian Receipt Verifier** validates transaction receipts directly against official banking records and public verification gateways. It provides an immediate authentic confirmation of the payer, recipient, transfer date, and exact settled amount.

### Primary Use Cases
- **Retailers & Merchants**: Verify customer payment slips on the spot before handing over goods or completing sales.
- **E-Commerce & Delivery Agents**: Validate digital transfer confirmations before delivering products.
- **Freelancers & Service Providers**: Confirm client payments without having to manually log into banking portals each time.
- **Accounting & Audit**: Keep a local, auditable history of all verified receipts and payment details.

---

## 🏦 Supported Financial Providers

| Provider | Supported Identifiers | Verification Method |
| :--- | :--- | :--- |
| **Commercial Bank of Ethiopia (CBE)** | Transaction ID (e.g., `FT...`) + Account Suffix (4–8 digits) | Direct query to CBE's BranchReceipt system (`apps.cbe.com.et:100`), parsing official branch PDF slips. |
| **Telebirr (Ethio Telecom)** | Invoice / Receipt Number (10 alphanumeric characters) | Query to Ethio Telecom's public transaction portal (`transactioninfo.ethiotelecom.et`), parsing official HTML receipt data. |
| **Bank of Abyssinia (BOA)** | Transaction Reference (`FT...`) + Account Suffix / QR URL `trx` parameter | Official BOA Online Slip API (`cs.bankofabyssinia.com`), extracting verified slip parameters. |

---

## ✨ Key Features & User Workflow

1. **📷 Camera QR Scanner**:
   - Point the device camera at the printed or on-screen receipt QR code.
   - Automatically detects verification URLs and extracts transaction references and account suffixes in real time.
2. **🖼️ Image Upload & On-Device OCR**:
   - Pick a receipt screenshot or photo from the device gallery.
   - Automatically detects the bank type, transaction ID, account suffix, or receipt number using Google ML Kit Text Recognition.
3. **⌨️ Manual Entry**:
   - Intuitive form with quick bank switching (CBE, Telebirr, Bank of Abyssinia) for manual verification.
4. **🚦 Clear Verification States**:
   - 🟢 **Verified (Green)**: Transaction confirmed authentic by the bank. Displays payer, recipient, date, reference, and settled amount.
   - 🟡 **Flagged (Amber)**: Transaction found but flagged or pending.
   - 🔴 **Not Found (Red)**: No transaction record found on bank servers — high likelihood of a fake/edited receipt.
   - ⚪ **Error (Gray)**: Bank server unreachable or network connection issue.
5. **📜 Local Audit History**:
   - Saves every scanned receipt locally using SQLite (`scans.db`).
   - Browse past verifications, search timestamps, review settled amounts, and view saved receipt images.

---

## 🛠️ All Technologies Used

### 📱 Frontend (Mobile App — Flutter)
- **Language**: [Dart](https://dart.dev/) (SDK `>=3.0.0 <4.0.0`)
- **Framework**: [Flutter](https://flutter.dev/) (Material Design 3)
- **State Management**: [`provider: ^6.1.1`](https://pub.dev/packages/provider) — Centralized state management for verification history and app data flow.
- **On-Device OCR & Vision**:
  - [`google_mlkit_text_recognition: ^0.12.0`](https://pub.dev/packages/google_mlkit_text_recognition) — On-device Optical Character Recognition (OCR) using Google ML Kit for offline/low-latency text extraction.
- **Barcode & QR Scanning**:
  - [`mobile_scanner: ^7.2.0`](https://pub.dev/packages/mobile_scanner) — Fast, native camera barcode and QR code reader.
- **Camera & Gallery Picker**:
  - [`image_picker: ^1.0.7`](https://pub.dev/packages/image_picker) — Capturing photos and selecting receipts from gallery.
- **Local Database & Storage**:
  - [`sqflite: ^2.3.0`](https://pub.dev/packages/sqflite) — SQLite database for persistent offline scan history.
  - [`path_provider: ^2.1.2`](https://pub.dev/packages/path_provider) & [`path: ^1.8.3`](https://pub.dev/packages/path) — File system storage management for saved receipt images.
- **Document & Content Parsing**:
  - [`syncfusion_flutter_pdf: ^33.2.15`](https://pub.dev/packages/syncfusion_flutter_pdf) — Parsing and extracting text from binary PDF receipts directly on the client.
  - [`html: ^0.15.6`](https://pub.dev/packages/html) — DOM parser for extracting structured transaction details from web receipts.
- **UI & Typography**:
  - [`google_fonts: ^8.1.0`](https://pub.dev/packages/google_fonts) — Modern typography.
- **Networking**:
  - [`http: ^1.2.0`](https://pub.dev/packages/http) and Dart's native `dart:io HttpClient` (configured with custom headers, timeouts, and self-signed certificate handling for legacy banking ports).

### 🖥️ Backend (API & Scrapers — Node.js)
- **Runtime**: [Node.js](https://nodejs.org/) (`24.x`)
- **Web Framework**: [Express.js](https://expressjs.com/) (`^5.2.1`)
- **Web Scraping & HTML Parsing**: [`cheerio: ^1.2.0`](https://cheerio.js.org/) — Fast jQuery-like DOM parsing for scraping Telebirr transaction verification portals.
- **HTTP & Protocol Handling**:
  - Native `node:https` — Custom HTTPS agents configured to handle non-standard ports (e.g. CBE's port `100`), SSL bypass for self-signed certificates, and customized User-Agent headers.
- **Deployment & Cloud**:
  - [Vercel](https://vercel.com/) — Serverless deployment via `vercel.json` rewrites and `api/index.js` serverless function handler.

---

## 🏗️ Architecture & Network Strategy

```
                               ┌────────────────────────────────────────┐
                               │       Flutter Mobile Application       │
                               └──────────────────┬─────────────────────┘
                                                  │
                   ┌──────────────────────────────┼──────────────────────────────┐
                   │ (Direct Device Request)      │ (Direct Device Request)      │ (Cloud API / Vercel)
                   ▼                              ▼                              ▼
     ┌───────────────────────────┐  ┌───────────────────────────┐  ┌───────────────────────────┐
     │  Commercial Bank of Eth.  │  │         Telebirr          │  │     Bank of Abyssinia     │
     │  (apps.cbe.com.et:100)    │  │ (transactioninfo.ethio..) │  │ (cs.bankofabyssinia.com)  │
     │   PDF Receipt Parser      │  │    HTML Receipt Parser    │  │       JSON REST API       │
     └───────────────────────────┘  └───────────────────────────┘  └───────────────────────────┘
```

> **Note on Ethiopian IP Restrictions**:
> Certain Ethiopian banking services (such as CBE and Telebirr) restrict access or block requests originating from cloud hosting IP ranges (US/EU). To ensure maximum reliability, the Flutter client implements a **hybrid architecture**:
> - **CBE & Telebirr**: Queried directly from the device to leverage local Ethiopian ISP network connectivity.
> - **Bank of Abyssinia**: Queried through the Vercel backend proxy or directly via REST API.

---

## 📁 Repository Structure

```
receipt-verifier/
├── README.md                      # Project documentation (this file)
├── receipt-verifier-backend/      # Node.js / Express backend service
│   ├── api/
│   │   └── index.js               # Vercel serverless function entrypoint
│   ├── boaAdapter.js              # Bank of Abyssinia verification adapter
│   ├── cbeAdapter.js              # CBE PDF slip download and parser adapter
│   ├── telebirrAdapter.js         # Telebirr web scraper adapter
│   ├── server.js                  # Express server & /api/verify router
│   ├── package.json               # Backend dependencies (express, cheerio)
│   └── vercel.json                # Vercel serverless configuration
└── receipt_verifier_app/          # Flutter mobile application
    ├── lib/
    │   ├── main.dart              # App bootstrap and theme setup
    │   ├── models/                # ReceiptScan data model
    │   ├── providers/             # HistoryProvider state management
    │   ├── screens/               # Home, Camera Scan, Upload, Manual Entry, Result, History
    │   ├── services/              # ApiService, OcrService, CbeVerifier, TelebirrVerifier, DatabaseHelper
    │   └── widgets/               # Reusable UI components (BankSelector, etc.)
    └── pubspec.yaml               # Flutter package configuration & dependencies
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Flutter SDK**: `>= 3.0.0`
- **Node.js**: `>= 18.x` (Recommended `20.x` or `24.x`)
- **Android Studio / Xcode** (for mobile device emulation or deployment)

### 2. Running the Backend Locally
```bash
cd receipt-verifier-backend
npm install
node server.js
```
The server will start at `http://localhost:3000`.

### 3. Running the Flutter App
```bash
cd receipt_verifier_app

# Install Flutter dependencies
flutter pub get

# Run on connected device or emulator
flutter run
```

---

## 📡 Backend API Reference

### `POST /api/verify`

**Request Body for CBE:**
```json
{
  "bank": "cbe",
  "transactionId": "FT24000ABC12",
  "accountSuffix": "1234"
}
```

**Request Body for Telebirr:**
```json
{
  "bank": "telebirr",
  "receiptNo": "TB12345678"
}
```

**Request Body for Bank of Abyssinia:**
```json
{
  "bank": "boa",
  "transactionId": "FT26146BYGBV",
  "accountSuffix": "96721"
}
```

**Response Example (Verified):**
```json
{
  "status": "verified",
  "payer": "ABEBE BIKILA",
  "receiver": "MERCHANT STORE",
  "date": "2024-03-29 14:32:00",
  "reference": "FT24000ABC12",
  "amount": 1500.00
}
```

---

## 🛡️ License

This project is licensed under the MIT License.
