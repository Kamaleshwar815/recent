import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDfSf61xKFWaCMWuZi-ys9POzGHegalGps",
    authDomain: "chat-app-28e7d.firebaseapp.com",
    projectId: "chat-app-28e7d",
    storageBucket: "chat-app-28e7d.appspot.com",
    messagingSenderId: "847808308323",
    appId: "1:847808308323:web:6de5dfe27159e77467c456",
    measurementId: "G-RXQ39HTYXF"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

const analytics = getAnalytics(app);

const storage = firebase.storage()


export {
    storage, analytics as default
}