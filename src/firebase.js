import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
 apiKey: "AIzaSyCkbetxw1KyPP5VQyXBuh5o0JubSRw1_iU",
  authDomain: "second-authenti.firebaseapp.com",
  projectId: "second-authenti",
  storageBucket: "second-authenti.firebasestorage.app",
  messagingSenderId: "83816640829",
  appId: "1:83816640829:web:6a62667fff8b2f212e1554"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
