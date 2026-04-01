VIN Decoder 🚗🔍

A modern web app for decoding vehicle VIN codes using the NHTSA vPIC API.

🔗 **[Live Demo](https://vin-inspector.netlify.app/)** | [GitHub](https://github.com/SergiyKusiy/VIN-DECODER)

## Features

- Decode any 17-character VIN code and view detailed vehicle information
- Form validation — empty field, max 17 characters, invalid characters
- History of the last 3 decoded VINs with one-click re-decode
- Browse all available NHTSA vehicle variables with descriptions
- Responsive layout from 420px to 1440px
- Dark tech theme with blue accent

## Pages

- `/` — VIN input form, recent history, decode results
- `/variables` — list of all vehicle variables
- `/variables/:id` — detailed description of a specific variable

## Tech Stack

- React 18 + TypeScript
- React Router v6
- SCSS Modules
- Vite
- NHTSA vPIC API
