import { auth ,db , app } from "./firebase.js";
import {signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js"
import { collection, addDoc  } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js"


document.getElementById("btn").addEventListener('click', ()=>{
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
    const user = userCredential.user;
    
    console.log(user);
    alert("Successfuly login Page")
    location.replace("../index.html")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });

})