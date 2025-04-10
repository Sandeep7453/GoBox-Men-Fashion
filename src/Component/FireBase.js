// FireBase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsmkwaWlfKBBa7Pkk6c22HuvmBZrg79W8",
  authDomain: "goboxloginauth.firebaseapp.com",
  projectId: "goboxloginauth",
  storageBucket: "goboxloginauth.appspot.com", // ✅ fixed here
  messagingSenderId: "396923925436",
  appId: "1:396923925436:web:6235d8eec278f4b8f531b9",
  measurementId: "G-4ED913RE3Q"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
