import firebase from 'firebase';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCVQAm8_LoCmSkVOiT81KZsgmreNdnU9KU",
    authDomain: "myjobs-7fd87.firebaseapp.com",
    projectId: "myjobs-7fd87",
    storageBucket: "myjobs-7fd87.appspot.com",
    messagingSenderId: "183470055939",
    appId: "1:183470055939:web:c67968755336d745ad2436",
    measurementId: "G-S4S1M6WYWM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage()

export { db, auth, provider, firebaseApp, storage };