🚗 VIN Decoder
A modern Single Page Application for decoding vehicle VIN codes using the NHTSA vPIC API.

🔗 Live Demo: https://vin-inspector.netlify.app/

📂 GitHub: https://github.com/SergiyKusiy/VIN-DECODER

✨ Features

🔍 Decode any 17-character VIN code
✅ Form validation — required field, max 17 characters, allowed characters only
🕘 Search history — last 3 VINs stored in localStorage
📊 Display only meaningful decoded data (filtered results)
📚 Browse all vehicle variables with descriptions
📄 View detailed info for each variable
📱 Fully responsive layout (420px–1440px)

🧭 Pages
RouteDescription/VIN input form, history, decoded results/variablesList of all vehicle variables/variables/:idVariable details

🛠️ Tech Stack

React + TypeScript
React Router v6
SCSS Modules
Vite
NHTSA vPIC API

🚀 Local Setup
bashgit clone https://github.com/SergiyKusiy/VIN-DECODER.git
cd VIN-DECODER
npm install
npm run dev
App will be available at http://localhost:5173
📦 Build
bashnpm run build

🌐 Deployment
Deployed on Netlify.

Build command: npm run build
Publish directory: dist
SPA routing handled via public/\_redirects

👨‍💻 Author

Serhii Kusyi
GitHub: https://github.com/SergiyKusiy
