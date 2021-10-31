import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBvKWIeqsFDWK4PUPyN_rpTXMDumLGbTCM",
  authDomain: "nuhairna.firebaseapp.com",
  projectId: "nuhairna",
  storageBucket: "nuhairna.appspot.com",
  messagingSenderId: "562035077999",
  appId: "1:562035077999:web:c02204a3c7e6cadf69ae9a",
  measurementId: "G-W3MTZ2VWV6"
};

export const db = firebase.initializeApp(firebaseConfig).firestore();

