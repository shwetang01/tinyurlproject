# 🔗 TinyURL - URL Shortener

A simple and functional URL shortener built with **Node.js**, **MongoDB**, and **EJS**. This project allows users to convert long URLs into short, shareable links with click tracking and a basic UI.

---

## 🚀 Features

- ✅ Shorten any valid URL
- ✅ Generate clean short links (e.g., `http://localhost:8001/abc123`)
- ✅ Click tracking (visit count)
- ✅ Dynamic short ID generation
- ✅ Displays list of all generated URLs
- ✅ EJS templating for server-rendered frontend
- ✅ Option to make links clickable
- ✅ Auto-refresh table after each new link is generated

---

## 📷 Demo Screenshot

![TinyURL Demo](<img width="1428" height="808" alt="image" src="https://github.com/user-attachments/assets/5b999c5e-a155-41c7-93cc-b0254921550a" />
)

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Templating**: EJS
- **Frontend**: HTML/CSS with server-side rendering
- **Dev Tools**: Nodemon

---

## 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/tinyurl-project.git
cd tinyurl-project

# 2. Install dependencies
npm install

# 3. Create .env file and configure
cp .env.example .env
