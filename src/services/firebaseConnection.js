// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD0hZEJtynD-1croK7JiBsjkmMX1kGSELE",
    authDomain: "devlinks-1d7fc.firebaseapp.com",
    projectId: "devlinks-1d7fc",
    storageBucket: "devlinks-1d7fc.appspot.com",
    messagingSenderId: "437559085812",
    appId: "1:437559085812:web:8492a1d3c07d47952ceca1",
    measurementId: "G-X3KR6ZXXE9"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth }