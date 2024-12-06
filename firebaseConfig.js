// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYGbwVJsz8wnPrNS6NUwS5Sm5egutPd-E",
  authDomain: "education-app-3dfd5.firebaseapp.com",
  projectId: "education-app-3dfd5",
  storageBucket: "education-app-3dfd5.firebasestorage.app",
  messagingSenderId: "401616455551",
  appId: "1:401616455551:web:c9d82552cc43107efc3c4a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);

export const userRef = collection(db, "users");
export const roomRef = collection(db, "rooms");
