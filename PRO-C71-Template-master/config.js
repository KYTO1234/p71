import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAyiFwvAOKEF3li27AagAbWbfwLA5Y5LPk",
    authDomain: "p71-6c46f.firebaseapp.com",
    projectId: "p71-6c46f",
    storageBucket: "p71-6c46f.appspot.com",
    messagingSenderId: "837261476556",
    appId: "1:837261476556:web:8fcd76db5418017a317869"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
