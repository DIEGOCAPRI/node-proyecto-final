// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD1NxkUWA0MCaQXdnyuKRS9yE6-RbHDYq4",
  authDomain: "api-rest-talentotech.firebaseapp.com",
  projectId: "api-rest-talentotech",
  storageBucket: "api-rest-talentotech.firebasestorage.app",
  messagingSenderId: "629357737908",
  appId: "1:629357737908:web:90be19b004b8e348cfe4e1",
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export {db};