// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPb9o5qITcbBKNnHqVOrLcBUJy9OoCAIw",
  authDomain: "pirme-sports.firebaseapp.com",
  projectId: "pirme-sports",
  storageBucket: "pirme-sports.appspot.com",
  messagingSenderId: "783047736556",
  appId: "1:783047736556:web:fa47fa269a322fa4cfb9c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app