import firebase from 'firebase'
require('firebase/firestore')

const config = {
  apiKey: 'AIzaSyC8cNQvlurWl_10dixHAzDRhuefpCtiXWo',
  authDomain: 'peerplus-staging.firebaseapp.com',
  databaseURL: 'https://peerplus-staging.firebaseio.com',
  projectId: 'peerplus-staging',
  storageBucket: 'peerplus-staging.appspot.com',
  messagingSenderId: '972618418370'
}

firebase.initializeApp(config)

export const db = firebase.firestore()
export const auth = firebase.auth()
