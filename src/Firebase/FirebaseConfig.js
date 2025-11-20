import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDtiVFjnUXTxsfcIbuzz7EwxYkAJ-z0-2I",
  authDomain: "fooddev1-b4c28.firebaseapp.com",
  projectId: "fooddev1-b4c28",
  storageBucket: "fooddev1-b4c28.firebasestorage.app",
  messagingSenderId: "931767479331",
  appId: "1:931767479331:web:5791c46c7ef8a5f9569596"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage};