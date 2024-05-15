import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyA3Linv2ArfdJbJ8BXms_2CyHUhUlbfKLM",
    authDomain: "educafe-a75f3.firebaseapp.com",
    projectId: "educafe-a75f3",
    storageBucket: "educafe-a75f3.appspot.com",
    messagingSenderId: "586089444870",
    appId: "1:586089444870:web:96ab91fedfe93d0b2bf587"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const login = document.getElementById("login");
login.addEventListener("click", function (event) {
    event.preventDefault();
    const email = document.getElementById("floatingInput").value;
    const password = document.getElementById("floatingPassword").value;
    const inform = document.getElementById("inform");

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            login.disabled = true;
            window.location.href = "/StudentDashboard/student.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
});