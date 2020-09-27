import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAwFcq-M96kUY67q56-zp-nRx1XW7srX8Q",
  authDomain: "my-project-1487065406582.firebaseapp.com",
  databaseURL: "https://my-project-1487065406582.firebaseio.com",
  projectId: "my-project-1487065406582",
  storageBucket: "my-project-1487065406582.appspot.com",
  messagingSenderId: "27350484465",
  appId: "1:27350484465:web:04f3d7a63bd89638b3f050",
  measurementId: "G-RRLMJDSZMV"
};
firebase.initializeApp(config);

const databaseRef = firebase.database().ref();
export const userRef = databaseRef.child("users");