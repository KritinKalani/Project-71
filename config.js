import * as firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyARCv-a3rMPv1ZPJZ0PXGn13C42aqcU84M",
    authDomain: "storyhub-3215d.firebaseapp.com",
    projectId: "storyhub-3215d",
    storageBucket: "storyhub-3215d.appspot.com",
    messagingSenderId: "409837320267",
    appId: "1:409837320267:web:f10427841acc15e7ed35ce"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();