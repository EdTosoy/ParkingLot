import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDk01T5cAafU6AnYFg_pld2CIe5YKg9w7U",

  authDomain: "parkinglotbackend.firebaseapp.com",

  projectId: "parkinglotbackend",

  storageBucket: "parkinglotbackend.appspot.com",

  messagingSenderId: "719023446770",

  appId: "1:719023446770:web:0aa89a4bba4ab12fe30e6b",

  measurementId: "G-XE6MWZNLX7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default getFirestore(app);
