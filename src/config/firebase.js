import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyC9yXJigbmIYfBJWxnCqAQv1sULgbmhyz8",
  authDomain: "tiktok-clone-8470b.firebaseapp.com",
  projectId: "tiktok-clone-8470b",
  storageBucket: "tiktok-clone-8470b.appspot.com",
  messagingSenderId: "417055247765",
  appId: "1:417055247765:web:6d580e4991d970d9a6fa9c",
  measurementId: "G-SJ33B28VXJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
