# AI Form Filler - Chrome Extension 🚀

This project is a Chrome Extension that allows users to **upload their personal information (like name, email, phone number, and about details)** and save it securely in a **MongoDB database** through a **Node.js backend server**.  
Later, the extension will help users **auto-fill web forms** easily using their saved data!

---

## Features

- 📝 Upload personal data (Name, Email, Phone, About).
- 💾 Save data securely in MongoDB database.
- 🔗 Communicates between Chrome extension and backend API.
- 📦 Built with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**.
- 🧩 Chrome Extension (Manifest V3) ready.

---

## Project Structure

ai-form-filler/ │ ├── extension/ │ ├── manifest.json │ ├── popup.html │ ├── popup.css │ ├── popup.js │ ├── background.js │ └── assets/ │ └── logo.png │ ├── server/ │ ├── server.js │ ├── package.json │ ├── README.md

---

## How It Works

1. The user fills out their personal information in the **popup.html**.
2. On clicking **Save**, the data is sent to the backend server (Node.js + Express).
3. The server saves the data into **MongoDB**.
4. Data can be retrieved later and used for **auto-filling** web forms!

---

## How To Run Locally

### 1. Backend (Node.js + MongoDB)
- Install dependencies:  
  ```bash
  npm install express mongoose cors
Start your MongoDB server (MongoDB Compass or local installation).

Go inside the server folder:

cd server
Start the backend server:

node server.js
The server runs on http://localhost:3000.

2. Chrome Extension
Open Google Chrome.

Go to chrome://extensions/.

Enable Developer mode (top-right corner).

Click Load unpacked.

Select the extension/ folder inside the project.

The extension will appear in Chrome!

Testing API
You can use Postman to test:

POST http://localhost:3000/save to save user data.

GET http://localhost:3000/get-latest to fetch the latest saved user data.

Future Improvements ✨
Auto-fill web forms automatically based on saved data.

Authentication system (Login/Logout).

Deployment to cloud server for public use.

🚀 Made with ❤️ by Mohd Noman
