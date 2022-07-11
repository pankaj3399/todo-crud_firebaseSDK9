import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXtXjlVytiAyZ1WTzG1iuNc2koxI7iUrw",
  authDomain: "todo-app-199a4.firebaseapp.com",
  projectId: "todo-app-199a4",
  storageBucket: "todo-app-199a4.appspot.com",
  messagingSenderId: "827953155826",
  appId: "1:827953155826:web:bf13bd8a1aa25169684a6b",
  measurementId: "G-JJV5VMXWFS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
