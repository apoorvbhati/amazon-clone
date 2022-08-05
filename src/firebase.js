import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { collection } from "firebase/firestore";
import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup 
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwGqop4Mxyqt0T8PEy_ins0WjtZoNlzpc",
  authDomain: "clone-aa05e.firebaseapp.com",
  projectId: "clone-aa05e",
  storageBucket: "clone-aa05e.appspot.com",
  messagingSenderId: "941942914774",
  appId: "1:941942914774:web:02e009c00e273347339377"
};

const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
const db = getFirestore(app);

const auth = getAuth();
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider()

export { db, collection, auth, storage, googleProvider, signInWithPopup };















