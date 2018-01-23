import firebase from 'firebase'
require('firebase/firestore')

const config = {
  apiKey: "AIzaSyCJorcUdpIohaOmHTyT35IG8tsvrRGLvLw",
    authDomain: "kautilya-a97c0.firebaseapp.com",
    databaseURL: "https://kautilya-a97c0.firebaseio.com",
    projectId: "kautilya-a97c0",
    storageBucket: "kautilya-a97c0.appspot.com",
    messagingSenderId: "615282478682"
}

firebase.initializeApp(config)

export const db = firebase.firestore()
export const auth = firebase.auth()
