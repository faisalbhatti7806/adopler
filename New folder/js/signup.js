import { auth ,db , app } from "./firebase.js";
import {createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js"
import { setDoc , doc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js"

document.getElementById("btn").addEventListener('click', ()=>{
    const fname = document.getElementById("fname").value
    const lname = document.getElementById("lname").value
    const number = document.getElementById("number").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    createUserWithEmailAndPassword(auth, email, password)
  .then(async(userCredential) => {
    const user = userCredential.user;

    try {
        const docRef = await setDoc(doc(db, "users", user.uid), {
          first: fname,
          last: lname,
          number:number, 
          email: email,
          id:user.uid
        });
      } catch (e) {
        console.error("Error adding document: ",docRef.id);
      }
console.log(user);
location.replace("../pages/login.html")
})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
})