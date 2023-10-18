import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA086wk_UEqqbJEJgZ-QEQomM6SbMk_swY",
  authDomain: "books123456.firebaseapp.com",
  databaseURL: "https://books123456-default-rtdb.firebaseio.com",
  projectId: "books123456",
  storageBucket: "books123456.appspot.com",
  messagingSenderId: "215012246460",
  appId: "1:215012246460:web:4d94c8a3b00ffea24ee1b9",
  measurementId: "G-5SKK2P6RFY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebase_auth = getAuth(app);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
