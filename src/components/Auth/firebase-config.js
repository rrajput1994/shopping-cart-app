import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8cnvEYIcFodHRwR-lzZMiOpRrGHIZxqk",
  authDomain: "shopping-app-345fa.firebaseapp.com",
  databaseURL: "https://shopping-app-345fa-default-rtdb.firebaseio.com",
  projectId: "shopping-app-345fa",
  storageBucket: "shopping-app-345fa.appspot.com",
  messagingSenderId: "925733237058",
  appId: "1:925733237058:web:cc476b16f5dd82e18298db",
  measurementId: "G-Q7VEKY2CYW",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
