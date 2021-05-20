import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const config=  {
    apiKey: "AIzaSyBcJ2tLuc-y84PhD-o_5RI2fE0Ch5Yfvm8",
    authDomain: "crwndb-c9701.firebaseapp.com",
    projectId: "crwndb-c9701",
    storageBucket: "crwndb-c9701.appspot.com",
    messagingSenderId: "373013769751",
    appId: "1:373013769751:web:d4bdcbf7d3566f5941f652"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt:'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(provider)
  export default firebase;