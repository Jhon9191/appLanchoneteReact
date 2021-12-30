import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

let firebaseConfig = {
    apiKey: "AIzaSyCJPx98i0KxuA134owIZuJDdV5VF6Xu_s4",
    authDomain: "applanchonetereactnative.firebaseapp.com",
    databaseURL: "https://applanchonetereactnative-default-rtdb.firebaseio.com",
    projectId: "applanchonetereactnative",
    storageBucket: "applanchonetereactnative.appspot.com",
    messagingSenderId: "822065040224",
    appId: "1:822065040224:web:3505a713a405338f372c05",
    measurementId: "G-ZKCJZBN21G"
  };
  
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;