// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3Ir-RwtHM-OG_jvWuQuV6Dnq6BNMrBQ0",
  authDomain: "myportfoliocontactform-ef550.firebaseapp.com",
  projectId: "myportfoliocontactform-ef550",
  storageBucket: "myportfoliocontactform-ef550.firebasestorage.app",
  messagingSenderId: "887789986106",
  appId: "1:887789986106:web:0b58620c69b4288f23b003",
  measurementId: "G-VDQ8GZFG2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);