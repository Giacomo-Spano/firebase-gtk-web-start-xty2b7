// Import stylesheets
import './style.css';
// Firebase App (the core Firebase SDK) is always required
import { initializeApp } from 'firebase/app';

// Add the Firebase products and methods that you want to use
import {} from 'firebase/auth';
//import {} from 'firebase/firestore';

import { getFirestore, doc, deleteDoc } from 'firebase/firestore';

import * as firebaseui from 'firebaseui';


const firebaseConfig = {
  apiKey: "AIzaSyDWj7Ueirn8TX-1YoQXt0NhhM_abxk8GoY",
  authDomain: "villamaria-e5f51.firebaseapp.com",
  databaseURL: "https://villamaria-e5f51-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "villamaria-e5f51",
  storageBucket: "villamaria-e5f51.appspot.com",
  messagingSenderId: "1009404580063",
  appId: "1:1009404580063:web:5d3774ff0e9bf56cb9196a",
  measurementId: "G-ZDRVEK56MS"
};

// Document elements
const startRsvpButton = document.getElementById('startRsvp');
const guestbookContainer = document.getElementById('guestbook-container');

const form = document.getElementById('leave-message');
const input = document.getElementById('message');
const guestbook = document.getElementById('guestbook');
const numberAttending = document.getElementById('number-attending');
const rsvpYes = document.getElementById('rsvp-yes');
const rsvpNo = document.getElementById('rsvp-no');

let rsvpListener = null;
let guestbookListener = null;

let  auth;

//const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);


async function main() {
  // Add Firebase project configuration object here
  //const firebaseConfig = {};

  console.log("step 1");

  const app = initializeApp(firebaseConfig);
  console.log("step 2");

  const db = app.getFirestore();
  


  
  //const db = getFirestore(app);
  console.log("step 3");

  // FirebaseUI config
  const uiConfig = {
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [
      // Email / Password Provider.
      EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        // Handle sign-in.
        // Return false to avoid redirect.
        return false;
      },
    },
  };

  // const ui = new firebaseui.auth.AuthUI(auth);
}
main();
