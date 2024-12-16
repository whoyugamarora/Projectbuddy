import firebase from "firebase/compat/app";
import { getFirestore, collection, addDoc, where, query, getDocs} from "firebase/firestore"
import "firebase/compat/auth";

const firebaseConfig = {
  // Your Config Goes Here
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "projectbuddy-ufv.firebaseapp.com",
  projectId: "projectbuddy-ufv",
  storageBucket: "projectbuddy-ufv.appspot.com",
  messagingSenderId: "1025724302770",
  appId: "1:1025724302770:web:c887f2845c2974134150ab"
};

firebase.initializeApp(firebaseConfig);
const db = getFirestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = firebase.auth();
export default firebase;


export const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(provider);
    const user = res.user;
    const userRef = collection(db, "users");
    const result = await getDocs(query(userRef, where("uid", "==", user.uid)));
    if (result.empty) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    alert(err.message);
  }
};

export const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    alert(err.message);
  }
};

export const registerWithEmailAndPassword = async (displayName, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      displayName,
      authProvider: "local",
      email,
    });
  } catch (err) {
    alert(err.message);
  }
};

// const sendPasswordResetEmail = async (email) => {
//   try {
//     await auth.sendPasswordResetEmail(email);
//     alert("Password reset link sent!");
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };
// const logout = () => {
//   auth.signOut();
// };
