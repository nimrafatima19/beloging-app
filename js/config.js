import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyBJ7CCQyXcZUtvxPeR0u3IxMOHTEeFfjlA",
    authDomain: "personal-app-cc4c8.firebaseapp.com",
    projectId: "personal-app-cc4c8",
    storageBucket: "personal-app-cc4c8.appspot.com",
    messagingSenderId: "417506507137",
    appId: "1:417506507137:web:4e2a99913ed89f8bd71080",
    measurementId: "G-W4RSCKTKXJ"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);