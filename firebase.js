import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCC7rL4YNUlgBvKsH0OxRLHZUQVDcus41U",
    authDomain: "signal-clone-40780.firebaseapp.com",
    projectId: "signal-clone-40780",
    storageBucket: "signal-clone-40780.appspot.com",
    messagingSenderId: "406136533300",
    appId: "1:406136533300:web:1757486d245e0fe343f561"
  };

  let app;

  if(firebase.apps.length === 0) {
      app = firebase.initializeApp(firebaseConfig);
  }else {
      app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export { db, auth};
