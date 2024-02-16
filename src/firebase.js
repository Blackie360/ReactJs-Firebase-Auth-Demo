import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAPHBj6m6n1jmSX9uD_4U-DcwH4kSVA6PU",
    authDomain: "fir-bb8ea.firebaseapp.com",
    projectId: "fir-bb8ea",
    storageBucket: "fir-bb8ea.appspot.com",
    messagingSenderId: "816797204987",
    appId: "1:816797204987:web:973b090f26303275e10b5e"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
    return new Promise((resolve, reject) => {
      signInWithPopup(auth, provider)
        .then((result) => {
          const name = result.user.displayName;
          const email = result.user.email;
          const profilePic = result.user.photoURL;
  
          localStorage.setItem("name", name);
          localStorage.setItem("email", email);
          localStorage.setItem("profilePic", profilePic);
          resolve(); // Resolve the promise after storing data
        })
        .catch((error) => {
          console.log(error);
          reject(error); // Reject the promise if there's an error
        });
    });
  };
  