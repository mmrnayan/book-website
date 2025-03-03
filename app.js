import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } 
from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZnaN2wbv0L4MM0vc-8hStBMmQRymBdbM",
  authDomain: "book-website-b4cf3.firebaseapp.com",
  projectId: "book-website-b4cf3",
  storageBucket: "book-website-b4cf3.appspot.com",
  messagingSenderId: "917281683542",
  appId: "1:917281683542:web:79446213a51754b183e3f7",
  measurementId: "G-BYJT5C7ST9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get elements
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login");
const signupBtn = document.getElementById("signup");
const logoutBtn = document.getElementById("logout");
const bookSection = document.getElementById("book-section");

// Login function
loginBtn.addEventListener("click", () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
            alert("Login successful!");
        })
        .catch(error => alert(error.message));
});

// Signup function
signupBtn.addEventListener("click", () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
            alert("Signup successful! Please login.");
        })
        .catch(error => alert(error.message));
});

// Logout function
logoutBtn.addEventListener("click", () => {
    signOut(auth).then(() => {
        alert("Logged out!");
    });
});

// Listen for auth changes
onAuthStateChanged(auth, (user) => {
    if (user) {
        bookSection.style.display = "block";
        logoutBtn.style.display = "block";
    } else {
        bookSection.style.display = "none";
        logoutBtn.style.display = "none";
    }
});
