import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBilItZZD0Bux_GLr7Q35bYM9qkbkqsFyg",
  authDomain: "superfon-register.firebaseapp.com",
  projectId: "superfon-register",
  storageBucket: "superfon-register.firebasestorage.app",
  messagingSenderId: "993362912670",
  appId: "1:993362912670:web:5804a3419c0dd76c22628f"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)









