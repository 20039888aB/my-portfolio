// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";   

const firebaseConfig = {
  apiKey: "AIzaSyA3Ir-RwtHM-OG_jvWuQuV6Dnq6BNMrBQ0",
  authDomain: "myportfoliocontactform-ef550.firebaseapp.com",
  projectId: "myportfoliocontactform-ef550",
  storageBucket: "myportfoliocontactform-ef550.firebasestorage.app",
  messagingSenderId: "887789986106",
  appId: "1:887789986106:web:0b58620c69b4288f23b003",
  measurementId: "G-VDQ8GZFG2G"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


setPersistence(auth, browserLocalPersistence)
  .then(() => {
    // Persistence set successfully
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

export { app, db, auth };
