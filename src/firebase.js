import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3rBYuzeSLOOdRzLOqUjkLwn8nnetggxU",
  authDomain: "auth-333bc.firebaseapp.com",
  projectId: "auth-333bc",
  storageBucket: "auth-333bc.appspot.com",
  messagingSenderId: "905826499291",
  appId: "1:905826499291:web:d1fdea4db605b9e9162afe"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

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
