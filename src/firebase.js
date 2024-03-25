import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCktxb6A2yfD24phw2X8SuqKbvMExTsXzE",
  authDomain: "kabaxmmmustxegerton.firebaseapp.com",
  projectId: "kabaxmmmustxegerton",
  storageBucket: "kabaxmmmustxegerton.appspot.com",
  messagingSenderId: "799302295258",
  appId: "1:799302295258:web:43459a71081007ef99cfe3",
  measurementId: "G-52LNT1RPD3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const githubProvider = new GithubAuthProvider();

// Function to create an account with email and password
export const createAccountWithEmailPassword = (email, password) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // You can add additional actions here if needed
        resolve(user); // Resolve the promise after creating the account
      })
      .catch((error) => {
        console.log(error);
        reject(error); // Reject the promise if there's an error
      });
  });
};

// Function to sign up with Google
export const signUpWithGoogle = () => {
  return new Promise((resolve, reject) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        resolve(user); // Resolve the promise after signing up with Google
      })
      .catch((error) => {
        console.log(error);
        reject(error); // Reject the promise if there's an error
      });
  });
};

// Function to sign up with GitHub
export const signUpWithGithub = () => {
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        resolve(user); // Resolve the promise after signing up with GitHub
      })
      .catch((error) => {
        console.log(error);
        reject(error); // Reject the promise if there's an error
      });
  });
};
