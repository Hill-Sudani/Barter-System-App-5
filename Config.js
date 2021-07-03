import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyBGeKnZmcNGN7wjDIl-XEDCfybv1VnsPjU',
  authDomain: 'barter-system-app-cb465.firebaseapp.com',
  projectId: 'barter-system-app-cb465',
  storageBucket: 'barter-system-app-cb465.appspot.com',
  messagingSenderId: '922582315381',
  appId: '1:922582315381:web:3f5b2461f8e03fa65c233c',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
