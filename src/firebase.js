import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAMTG0JYYia4j-kWOliPzLJVGByi7KYvMM",
    authDomain: "the-mermaid-data.firebaseapp.com",
    databaseURL: "https://the-mermaid-data.firebaseio.com",
    projectId: "the-mermaid-data",
    storageBucket: "the-mermaid-data.appspot.com",
    messagingSenderId: "101873903439",
    appId: "1:101873903439:web:18638a193cb05828aec73a",
    measurementId: "G-XYVWMZ5X04"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;