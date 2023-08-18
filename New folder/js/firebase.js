import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { getFirestore  } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyB-vVR_EAFuRyrRPgH6s71CG0vMbW4Q3Iw",
  authDomain: "newproject-34441.firebaseapp.com",
  projectId: "newproject-34441",
  storageBucket: "newproject-34441.appspot.com",
  messagingSenderId: "119028362142",
  appId: "1:119028362142:web:ebdce886a33e238e3d848f",
  measurementId: "G-LDC4REWHN9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);



export {auth , app ,  db , storage}