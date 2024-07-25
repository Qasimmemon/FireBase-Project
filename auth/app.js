


// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// import {
//   getAuth,
//   onAuthStateChanged,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
// } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// import {
//   getFirestore,
//   doc,
//   collection,
//   setDoc,
//   addDoc,
//   getDocs,
//   getDoc,
//   deleteDoc,
//   updateDoc,
// } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// import {
//   getStorage,
//   ref,
//   uploadBytes,
//   getDownloadURL,
// } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBwwuczW0LLhhP8A5f_4sliRkhq-E25AIQ",
//     authDomain: "first-project-fe546.firebaseapp.com",
//     projectId: "first-project-fe546",
//     storageBucket: "first-project-fe546.appspot.com",
//     messagingSenderId: "521320857220",
//     appId: "1:521320857220:web:f2296527cedf7b68024cd1",
//     measurementId: "G-GSCYXYFGX3"
//   };
  

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// const db = getFirestore(app);
// const storage = getStorage(app);


// const signup_container = document.getElementById("signup_container");
// const login_container = document.getElementById("login_container");
// const signup_form = document.getElementById("signup_form");
// const signin_form = document.getElementById("signin_form");



// email
// const signupbtn = document.getElementById('signupbtn')
// const email = document.getElementById('email')
// const pass = document.getElementById('pass')
// signupbtn.addEventListener("click", signupUser);

// function signupUser() {
//   const emailvalue = email.value;
//   const passwordvalue = pass.value;
//   createUserWithEmailAndPassword(auth, emailvalue, passwordvalue,)
//     .then((userCredential) => {
//       // Signed up
//       const user = userCredential.user;
//       console.log("user", user);
//       window.location.href = "/";

//       addData(emailvalue, passwordvalue,);
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log("errorMessage", errorMessage);
//       // ..
//     });
// }

// signin_form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(e);
//   e.target[2].disabled = true;
//   const email = e.target[0].value;
//   const password = e.target[1].value;

//   signInWithEmailAndPassword(auth, email, password)
//     .then(() => {
//       console.log("Login hogya");
//       window.location.href = "/";
//       e.target[2].disabled = false;
//     })
//     .catch((err) => {
//       alert(err), (e.target[2].disabled = false);
//     });
// });



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import {
  getFirestore,
  addDoc,
  collection
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwwuczW0LLhhP8A5f_4sliRkhq-E25AIQ",
  authDomain: "first-project-fe546.firebaseapp.com",
  projectId: "first-project-fe546",
  storageBucket: "first-project-fe546.appspot.com",
  messagingSenderId: "521320857220",
  appId: "1:521320857220:web:f2296527cedf7b68024cd1",
  measurementId: "G-GSCYXYFGX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const signup = document.getElementById('signup')
const signin = document.getElementById('signin')

const signupemail = document.getElementById("signupemail");
const signuppassword = document.getElementById("signuppassword");
const signupBtn = document.getElementById("signupBtn");

const signinemail = document.getElementById("signinemail");
const signinpassword = document.getElementById("signinpassword");
const signinBtn = document.getElementById("signinBtn");

const content = document.getElementById("content");
const authentication = document.getElementById("authentication");
const showEmail = document.getElementById("showEmail");

signupBtn.addEventListener("click", signupUser);
signinBtn.addEventListener("click", signinUser);

onAuthStateChanged(auth, (user) => {
  if (user) {
    content.style.display = "block";
    authentication.style.display = "none";
    showEmail.innerHTML = `<p>Welcome ${user.email}</p>`;
  } else {
    content.style.display = "none";
    authentication.style.display = "block";
  }
});

function signupUser() {
  const emailvalue = signupemail.value;
  const passwordvalue = signuppassword.value;
  
  createUserWithEmailAndPassword(auth, emailvalue, passwordvalue)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed up:", user);
      addUserToFirestore(user);
      window.location.href = "/";
    })
    .catch((error) => {
      console.error("Error signing up:", error.message);
    });
}

function signinUser() {
  const emailvalue = signinemail.value;
  const passwordvalue = signinpassword.value;
  
  signInWithEmailAndPassword(auth, emailvalue, passwordvalue)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed in:", user);
      window.location.href = "/";
    })
    .catch((error) => {
      console.error("Error signing in:", error.message);
    });
}

function addUserToFirestore(user) {
  const usersCollection = collection(db, "users");
  addDoc(usersCollection, {
    uid: user.uid,
    email: user.email,
  })
  .then(() => {
    console.log("User added to Firestore");
  })
  .catch((error) => {
    console.error("Error adding user to Firestore:", error.message);
  });
}
const goToCreateAccount = document.getElementById("goToCreateAccount");
const goToSignIn = document.getElementById("goToSignIn");
goToCreateAccount.addEventListener("click", (e) => {
  e.preventDefault();
  signup.style.display = "block";
  signin.style.display = "none";
});
goToSignIn.addEventListener("click", (e) => {
  e.preventDefault();
  signup.style.display = "none";
  signin.style.display = "block";
});