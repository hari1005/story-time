import firebase from 'firebase'
require ('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyDHO8IZpun81TuxQpbUkhVH9Td8n99kwLM",
  authDomain: "storytime-8f9d9.firebaseapp.com",
  databaseURL: "https://storytime-8f9d9-default-rtdb.firebaseio.com",
  projectId: "storytime-8f9d9",
  storageBucket: "storytime-8f9d9.appspot.com",
  messagingSenderId: "720698537260",
  appId: "1:720698537260:web:258e4bdb8a274bfb5ae889"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore()