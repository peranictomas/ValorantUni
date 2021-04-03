import * as React from 'react';
import App from './App';
import firebase from "@react-native-firebase/app";
import Auth from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBbr0-7jXhJr9aT4AEwbJ1EBZun6oBEb1c",
  authDomain: "valorantuniversity.firebaseapp.com",
  projectId: "valorantuniversity",
  storageBucket: "valorantuniversity.appspot.com",
  messagingSenderId: "868992500282",
  appId: "1:868992500282:web:74bc5eb708bca2e1e52b03"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase, Auth, database};

function Setup() {
  return <App />;
}

export default Setup;