import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyChbyNEA2pKe1LUZCqzI0fqZOgDotUAO_c",
  authDomain: "disney-react-clone-36f9b.firebaseapp.com",
  projectId: "disney-react-clone-36f9b",
  storageBucket: "disney-react-clone-36f9b.appspot.com",
  messagingSenderId: "130118534669",
  appId: "1:130118534669:web:d2b86b2f90d3e1f5923744",
  measurementId: "G-B4HT3CYF65",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
