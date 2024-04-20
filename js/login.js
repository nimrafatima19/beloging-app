import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./config.js";

const form = document.querySelector('#form');
// const firstname = document.querySelector('#first-name');
// const lastname = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const repeatpassword = document.querySelector('#repeat-password');



form.addEventListener('submit', (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email.value, password.value, repeatpassword.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            window.location = 'home.html'
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage);
        });

})


