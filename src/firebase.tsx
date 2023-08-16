// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDyPYLRCOayufQk9VI574FZ0wKslX7ff2U',
  authDomain: 'realtor-clone-react-bd1da.firebaseapp.com',
  projectId: 'realtor-clone-react-bd1da',
  storageBucket: 'realtor-clone-react-bd1da.appspot.com',
  messagingSenderId: '1052518529044',
  appId: '1:1052518529044:web:992b92699ca5ee9cb84f01',
  measurementId: 'G-FYVD7P62WJ'
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
