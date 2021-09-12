import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfyQu9b6QP1XurV7BbxQGL8iIk1A0xBGg",
    authDomain: "resume-3cb40.firebaseapp.com",
    projectId: "resume-3cb40",
    storageBucket: "resume-3cb40.appspot.com",
    messagingSenderId: "22762391456",
    appId: "1:22762391456:web:c5a101068fe809d23506c5",
    measurementId: "G-11RJ2V5HZE"
  };

firebase.initializeApp(firebaseConfig)

export const auth=firebase.auth();
export const firestore =firebase.firestore()
