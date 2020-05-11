import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCj2XDWZJ3K-grENo81kl8wx4IrwN1Zv04",
    authDomain: "the-mermaid-data-f581b.firebaseapp.com",
    databaseURL: "https://the-mermaid-data-f581b.firebaseio.com",
    projectId: "the-mermaid-data-f581b",
    storageBucket: "the-mermaid-data-f581b.appspot.com",
    messagingSenderId: "1088616038828",
    appId: "1:1088616038828:web:775740215da445dcfe3a09",
    measurementId: "G-ER29FXR8L9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;