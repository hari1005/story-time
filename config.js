import firebase from 'firebase'
require ('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyCRmD9NVSVKQSGTPHc2rri-UsgSchm6tM0",
  authDomain: "santa-494f8.firebaseapp.com",
  databaseURL: "https://santa-494f8.firebaseio.com",
  projectId: "santa-494f8",
  storageBucket: "santa-494f8.appspot.com",
  messagingSenderId: "608018213266",
  appId: "1:608018213266:web:b7a6bbd10531e27462794b"
};


firebase.initializeApp(firebaseConfig);
export default firebase.firestore()