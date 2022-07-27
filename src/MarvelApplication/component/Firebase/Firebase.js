import  { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const Config = {
     apiKey: "AIzaSyAGWOixTZaZKTa2qPtoe2trspgC80mEdbA",
     authDomain: "marvelquiz-e2ba1.firebaseapp.com",
     projectId: "marvelquiz-e2ba1",
     storageBucket: "marvelquiz-e2ba1.appspot.com",
     messagingSenderId: "313829904775",
     appId: "1:313829904775:web:16e1e1cd7a8fca6d470322"
  };
 
  const myapp =initializeApp(Config);

  export const auth=getAuth(myapp);

