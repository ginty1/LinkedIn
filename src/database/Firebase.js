import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDVxOoLb7sJFol55LlWNQhfYUtCOzWJtO0",
  authDomain: "linkedin-4abea.firebaseapp.com",
  projectId: "linkedin-4abea",
  storageBucket: "linkedin-4abea.appspot.com",
  messagingSenderId: "24882892001",
  appId: "1:24882892001:web:f8db9771279e7305d1bba0",
};
//app registration
const FirebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = FirebaseApp.firestore();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
