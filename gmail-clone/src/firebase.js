import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyB8n8bD-WQfRBcE_8gaDaaDOQPUlsaC7t8",
    authDomain: "clone-3d70e.firebaseapp.com",
    projectId: "clone-3d70e",
    storageBucket: "clone-3d70e.appspot.com",
    messagingSenderId: "764365825220",
    appId: "1:764365825220:web:0b6920f6e45e9632275591"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();

  export {db, auth, provider};