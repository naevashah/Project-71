import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyADsFR86tREidtr7unrmu8R9FxEzYN95ZU",
    authDomain: "project-71-49785.firebaseapp.com",
    projectId: "project-71-49785",
    storageBucket: "project-71-49785.appspot.com",
    messagingSenderId: "1040181056179",
    appId: "1:1040181056179:web:544c9c42cc0ca6d537d6c6"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


