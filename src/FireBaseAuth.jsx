// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyA4kGAi6rHQV35iwFTGutyQmKsK-VVS5dM",
  authDomain: "newe-7c9bc.firebaseapp.com",
  projectId: "newe-7c9bc",
  storageBucket: "newe-7c9bc.appspot.com",
  messagingSenderId: "1006976178674",
  appId: "1:1006976178674:web:b7ab6e3eafc26861e1f36b",
  measurementId: "G-WR4HLFW446",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// const db = getFirestore(app);
export { auth, provider };
