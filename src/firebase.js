import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCb9aXyhJ0zD60ZzOCWXcghS03urYDe-IU",
  authDomain: "chat-7bb3f.firebaseapp.com",
  projectId: "chat-7bb3f",
  storageBucket: "chat-7bb3f.appspot.com",
  messagingSenderId: "639427317615",
  appId: "1:639427317615:web:41f8f34d46d87b1c39e29a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()


