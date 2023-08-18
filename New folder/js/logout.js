import { auth, db, app } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js"
import { collection, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js"




onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        // console.log(uid);/
        const q = query(collection(db, "users"), where("id", "==", uid));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.data().name);
                document.getElementById("log").style.display="block"
                document.getElementById("uname").innerHTML=doc.data().name
            });
        });

    } else {
        location.replace("../pages/login.html")
    }
});



document.getElementById("log").addEventListener('click', () => {

    signOut(auth).then(() => {
        alert("Sign-out successful.")
        location.replace("../pages/login.html")
    }).catch((error) => {
        alert("An error happened.")
    });

})