🚗 VIN Decoder

A modern Single Page Application (SPA) for decoding vehicle VIN codes using the NHTSA vPIC API.

🔗 Live Demo: https://vin-inspector.netlify.app/

📂 GitHub: https://github.com/SergiyKusiy/VIN-DECODER

✨ Overview

This application allows users to decode a vehicle VIN (Vehicle Identification Number) and view detailed information such as manufacturer, model, year, and other specifications.

The app also provides a full list of available vehicle variables with descriptions.

⚙️ Features
🔍 Decode any 17-character VIN code
✅ Form validation:
required field
max 17 characters
allowed characters only
🕘 Search history (last 3 VINs using localStorage)
📊 Display only meaningful decoded data (filtered results)
📚 Browse all vehicle variables
📄 View detailed info for each variable
📱 Fully responsive layout (420px–1440px)
🎨 Custom cyberpunk pink UI theme
🧭 Pages
Route Description
/ VIN input, history, decoded results
/variables List of all vehicle variables
/variables/:id Variable details
🛠️ Tech Stack
React + TypeScript
React Router
SCSS Modules
Vite
NHTSA vPIC API
🚀 Getting Started (Local Setup)

1. Clone the repository
   git clone https://github.com/SergiyKusiy/VIN-DECODER.git
   cd VIN-DECODER
2. Install dependencies
   npm install
3. Run the app
   npm run dev

App will be available at:

http://localhost:5173
📦 Build
npm run build
🌐 Deployment

The application is deployed using Netlify.

Build command: npm run build
Publish directory: dist
📌 Notes
Uses public NHTSA API, no API key required
SPA routing handled via \_redirects configuration for Netlify
👨‍💻 Author

Serhii Kusyi
GitHub: https://github.com/SergiyKusiy
