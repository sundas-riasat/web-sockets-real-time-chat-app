# 📝 Real-Time Chat App (Socket.io & MongoDB)

🚀 A **real-time chat application** built using the **MERN stack** with **Socket.io** for real-time messaging and **MongoDB** for storing chat history.

## ✨ Features
- 🔥 **Real-time messaging** using WebSockets
- 💾 **Persistent chat storage** with MongoDB
- ⚡ **Express.js backend** with WebSockets support
- 🎨 **React frontend** with Socket.io client integration
- 🛠 **User-friendly** and intuitive UI
- 🏎 **Fast and responsive** chat experience

## 📌 Tech Stack
- **Frontend:** React, Socket.io Client  
- **Backend:** Node.js, Express, Socket.io  
- **Database:** MongoDB (Mongoose)  
- **Deployment:** Vercel/Netlify (Frontend) & Render/Heroku (Backend)  

## 📂 Project Structure
```
real-time-chat/
├── client/   # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── styles.css
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
├── server/   # Node.js + Express backend
│   ├── models/
│   │   ├── Message.js
│   ├── routes/
│   │   ├── messages.js
│   ├── index.js
│   ├── config/
│   ├── package.json
│   ├── .env.example
│   └── README.md
├── README.md
└── package.json
```

## 🚀 Getting Started  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/your-username/real-time-chat.git
cd real-time-chat
```

### 2️⃣ Backend Setup  
```sh
cd server
npm install
npm start
```

### 3️⃣ Frontend Setup  
```sh
cd ../client
npm install
npm run dev
```

### 4️⃣ Run the App  
- Open **http://localhost:5173** in your browser  
- Open multiple tabs to test real-time messaging  

## 🔧 API Endpoints  
| Method | Endpoint       | Description               |
|--------|--------------|---------------------------|
| GET    | `/messages`  | Fetch chat history       |
| POST   | `/messages`  | Save a new message       |

## ⚡ How It Works
1. The **frontend (React)** connects to the backend using **Socket.io client**.
2. The **backend (Express + Socket.io)** listens for new messages and broadcasts them in real-time.
3. Messages are **stored in MongoDB**, ensuring chat history persistence.
4. When a user opens the app, they receive the latest messages from MongoDB.
5. New messages appear instantly without refreshing the page!

## 📸 Screenshots  
### 💬 Chat Interface  
![Chat UI](https://github.com/sundas-riasat/web-sockets-real-time-chat-app/blob/main/preview.png)  

## 🚀 Deployment  
### 🌐 Deploy Backend (Render/Heroku)  
1. Set up MongoDB Atlas  
2. Add `.env` file with your database URI  
3. Deploy to **Render** or **Heroku**

### 🌐 Deploy Frontend (Vercel/Netlify)  
1. Build the React app  
```sh
npm run build
```
2. Deploy to **Vercel** or **Netlify**

## 🤝 Contributing  
1. **Fork** this repository  
2. Create a new branch (`feature-branch`)  
3. **Commit your changes**  
4. **Push to GitHub**  
5. Open a **Pull Request (PR)**  

## 🛠 Future Enhancements  
- ✅ **User Authentication** (Login/Register)  
- ✅ **Typing Indicators**  
- ✅ **Read Receipts**  
- ✅ **Group Chats & Direct Messages**  

## 📜 License
This project is licensed under the **MIT License**.

## ⭐ Support & Feedback  
- 💬 Found a bug? **Open an issue!**  
- 🌟 Like this project? **Give it a star!**  

### 🔥 **Follow for More!**
- 🚀 **[GitHub](https://github.com/sundas-riasat)**  
- 📺 **[YouTube](https://www.youtube.com/@sundasmood)**  
