// src/firebase/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATLJNJS3nTSK4DqSw5JQxawCMzneX-Ki4",
    authDomain: "arctunes-db4b0.firebaseapp.com",
    projectId: "arctunes-db4b0",
    storageBucket: "arctunes-db4b0.firebasestorage.app",
    messagingSenderId: "697971965969",
    appId: "1:697971965969:web:a92a965fac0ae0fecf71b0",
    measurementId: "G-YXSJBG8S7K"               // Replace with your App ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
