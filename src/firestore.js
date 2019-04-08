import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyD47r_jBIVWbuw9xwTPNrOuPIq3a-veO4U',
  authDomain: 'coligo-baraa.firebaseapp.com',
  databaseURL: 'https://coligo-baraa.firebaseio.com',
  projectId: 'coligo-baraa',
  storageBucket: 'coligo-baraa.appspot.com',
  messagingSenderId: '75894038022'
};
firebase.initializeApp(config);

export default firebase;
