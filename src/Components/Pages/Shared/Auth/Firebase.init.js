import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyC588oKxcTSYVX92-tIp_6Vk6rQ3R8yP00",
  authDomain: "auto-accord-10e53.firebaseapp.com",
  projectId: "auto-accord-10e53",
  storageBucket: "auto-accord-10e53.appspot.com",
  messagingSenderId: "439734757377",
  appId: "1:439734757377:web:d3d76e679c15b14ca97800"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;