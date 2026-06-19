# ThirdEye

A React Native mobile application built during an internship at Nokia that enables factory floor workers to scan QR codes on manufacturing trolleys and instantly retrieve real-time equipment and maintenance data.

---

## What This App Does

Factory trolleys at Nokia carry equipment and components across the manufacturing floor. ThirdEye allows workers to scan a QR code on any trolley using their phone camera and immediately see detailed information about that trolley — including maintenance records, measurement data, and component details — without needing to manually look anything up.

---

## Features

- 📷 **QR/Barcode Scanning** — Scan trolley QR codes using the device camera
- 🔐 **Azure Active Directory Authentication** — Secure Nokia employee login
- 📊 **Real-time Data Lookup** — Fetches live data from MongoDB Atlas
- 📄 **PDF Report Generation** — Generate and share equipment reports as PDFs
- 🏭 **Multiple Factory Modules:**
  - Periodic Maintenance (PM)
  - SMT (Surface Mount Technology)
  - RFM
  - Tester
  - Soldering Station
  - Warehouse Management

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React Native | Cross-platform iOS & Android app |
| Expo | Development and camera/barcode tools |
| MongoDB Atlas | Cloud database for trolley data |
| Azure Active Directory | Employee authentication |
| React Navigation | Screen navigation |
| RNHTMLtoPDF | PDF generation |

---

## Project Structure

```
├── App.js                          # Root component with navigation
├── Components/
│   ├── Scanning.js                 # QR code scanning screen
│   ├── List.js                     # Results list view
│   ├── Loading.js                  # Loading screen
│   ├── ScanningOrType.js           # Scan or manual entry
│   ├── Warehouse/
│   │   └── Login.js                # Warehouse login
│   ├── PeriodicMaintainance/
│   │   └── PM.js                   # Periodic maintenance module
│   ├── SMT/
│   │   └── SMT.js                  # SMT module
│   ├── Tester/
│   │   └── Tester.js               # Tester module
│   ├── RFM/
│   │   └── RFM.js                  # RFM module
│   └── SolderingStation/
│       └── SolderingStation.js     # Soldering station module
├── assets/
│   ├── NokiaLogo.png               # Nokia branding
│   ├── loading.gif                 # Loading animation
│   └── splash.png                  # Splash screen
├── app.json                        # App configuration
├── package.json                    # Dependencies
└── babel.config.js                 # Babel configuration
```

---

## How It Works

1. Employee opens the app and logs in via **Azure Active Directory**
2. App displays the **QR code scanner**
3. Worker points camera at a trolley QR code
4. App sends the trolley ID to **MongoDB Atlas**
5. Retrieved data is displayed instantly on screen
6. Worker can optionally **generate a PDF report** of the trolley details

---

## Setup & Installation

```bash
# Install dependencies
npm install

# Start the development server
npx expo start

# Run on Android
npx expo run:android

# Run on iOS
npx expo run:ios
```

### Prerequisites
- Node.js
- Expo CLI
- Android Studio or Xcode (for device simulation)
- Access to Nokia's MongoDB Atlas cluster

---

## Built With ❤️ During Nokia Internship

This app was developed as an internal tool to improve efficiency on Nokia's manufacturing floor by digitizing the trolley tracking and maintenance process.
