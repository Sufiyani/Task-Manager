📋 Task Manager ✅
Task Manager is a modern task management app built using React and Firebase. It allows users to add, edit, delete, and track tasks with deadlines, mark them as completed or pending, and manage them securely with user authentication.

🚀 Features
🔐 Firebase Authentication (Sign Up / Login / Logout)
➕ Add / Edit / Delete Tasks
📅 Set Deadlines for each task
✅ Mark tasks as Completed or keep them Pending
📊 Real-time task list display (per authenticated user)
⚡ State management with Zustand
🛡 Form validation using Formik + Yup
🎨 Modern UI with ShadCN components

🛠️ Tech Stack
Frontend: React.js + Vite
State Management: Zustand
Forms & Validation: Formik + Yup
Backend / DB: Firebase Firestore
Auth: Firebase Authentication
UI Library: ShadCN/UI
Icons: Lucide Icons

📂 Get Started
1️⃣ Clone the repository

bash
Copy
Edit
git clone https://github.com/your-username/task-manager.git
cd task-manager
2️⃣ Install dependencies

bash
Copy
Edit
npm install
3️⃣ Add your Firebase config
In firebase.js, replace with your Firebase project credentials:

javascript
Copy
Edit
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
4️⃣ Run the app

bash
Copy
Edit
npm run dev
🔮 Future Expansion
🔍 Filter tasks by Pending / Completed
⏰ Highlight overdue tasks
📊 Add task statistics & analytics dashboard
