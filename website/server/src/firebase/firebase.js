import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyCiyyTidLhKoyEjtDjvkjtAPGEqcuacXyU",
    authDomain: "webdevsim-37cce.firebaseapp.com",
    databaseURL: "https://webdevsim-37cce.firebaseio.com",
    projectId: "webdevsim-37cce",
    storageBucket: "webdevsim-37cce.appspot.com",
    messagingSenderId: "765964038136",
    appId: "1:765964038136:web:ce66f5b56e40761ef1b00d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage()

  export  {
    storage, firebase as default
  }