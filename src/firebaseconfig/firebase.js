import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyA4nOXGdFCzRbMWKH9TIZQCCtdxiW1X-Xg",
  authDomain: "uploadingfile-cbdc5.firebaseapp.com",
  projectId: "uploadingfile-cbdc5",
  storageBucket: "uploadingfile-cbdc5.appspot.com",
  messagingSenderId: "40823483663",
  appId: "1:40823483663:web:3ee01ff21c1500c7f1227a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);