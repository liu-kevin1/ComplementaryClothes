import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBsC52_gqDR8w6Bv1C_selUrWBIEQxiMig",
    authDomain: "artfash-138e9.firebaseapp.com",
    databaseURL: "https://artfash-138e9.firebaseio.com",
    projectId: "artfash-138e9",
    storageBucket: "artfash-138e9.appspot.com",
    messagingSenderId: "362366799582",
    appId: "1:362366799582:web:6573c90e65849cc6373c4f",
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;