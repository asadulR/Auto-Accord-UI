import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBfsxQl-hbBXZfIqbP5A0tNWrySRXIQv3k",
  authDomain: "money-max-2a918.firebaseapp.com",
  projectId: "money-max-2a918",
  storageBucket: "money-max-2a918.appspot.com",
  messagingSenderId: "573522961693",
  appId: "1:573522961693:web:eda2efff532782cb186df4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;