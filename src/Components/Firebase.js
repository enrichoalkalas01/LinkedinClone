import React from 'react'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCX25MhUfasWHOBxO7M_sj4gYyFKTr17P4",
    authDomain: "linkedinclone-eba53.firebaseapp.com",
    projectId: "linkedinclone-eba53",
    storageBucket: "linkedinclone-eba53.appspot.com",
    messagingSenderId: "559601774197",
    appId: "1:559601774197:web:f56223ddb7a159e498523c",
    measurementId: "G-94C0NM3NJF"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }