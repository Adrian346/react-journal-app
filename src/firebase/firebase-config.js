import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth' 

// const firebaseConfig = {
//     apiKey: "AIzaSyDG9a3XFzA9lJPmRjx9ZrxFGFOsjkndhQ8",
//     authDomain: "react-journal-app-497b1.firebaseapp.com",
//     projectId: "react-journal-app-497b1",
//     storageBucket: "react-journal-app-497b1.appspot.com",
//     messagingSenderId: "183117553493",
//     appId: "1:183117553493:web:f73c15a22501098ddb19dc"
// };

// const firebaseConfigTesting = {
//     apiKey: "AIzaSyD6SLtZQClY7teeTnbo6alSYx-j8nAs3eU",
//     authDomain: "react-test-f002a.firebaseapp.com",
//     databaseURL: "https://react-test-f002a-default-rtdb.firebaseio.com",
//     projectId: "react-test-f002a",
//     storageBucket: "react-test-f002a.appspot.com",
    // messagingSenderId: "492304644236",
//     appId: "1:492304644236:web:0116f6209e81c4063623a9",
//     measurementId: "G-YTJC74GXYS"
// };

//   if( process.env.NODE_ENV === 'test' ){
//       firebase.initializeApp(firebaseConfigTesting);
//   } else {
//       // Initialize Firebase
//       firebase.initializeApp(firebaseConfig);
//   }

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
}

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()


  export {
      db,
      googleAuthProvider,
      firebase
  }