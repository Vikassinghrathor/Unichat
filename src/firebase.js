import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyAjljcHYbNm4GRPhuQGn29ZiMeD_oWQq5E",
    authDomain: "unichat-4a171.firebaseapp.com",
    projectId: "unichat-4a171",
    storageBucket: "unichat-4a171.appspot.com",
    messagingSenderId: "678642342283",
    appId: "1:678642342283:web:75490b958e5758785e778e"
  }).auth();