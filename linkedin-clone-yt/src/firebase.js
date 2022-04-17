import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBhth5jqVEmrjrTybegsgxmDn1h3Z4VE2A",
    authDomain: "linkedin-clone-yt-79e10.firebaseapp.com",
    projectId: "linkedin-clone-yt-79e10",
    storageBucket: "linkedin-clone-yt-79e10.appspot.com",
    messagingSenderId: "180727989438",
    appId: "1:180727989438:web:a9badae7475fc2f3e88aef"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export {db, auth};