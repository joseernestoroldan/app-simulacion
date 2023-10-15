// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDega09m26Pr-lBMXz45lCORBQESv1VkjM",
  authDomain: "app-crud-firestore.firebaseapp.com",
  projectId: "app-crud-firestore",
  storageBucket: "app-crud-firestore.appspot.com",
  messagingSenderId: "545815524871",
  appId: "1:545815524871:web:94bbfd37b02dcb4a70dca2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
