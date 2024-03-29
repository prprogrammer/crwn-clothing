import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBBbftMoC5I7sZ1XBnIlXC77wxH2c6ry2M",
  authDomain: "crwn-db-fe1bf.firebaseapp.com",
  databaseURL: "https://crwn-db-fe1bf.firebaseio.com",
  projectId: "crwn-db-fe1bf",
  storageBucket: "crwn-db-fe1bf.appspot.com",
  messagingSenderId: "213880718677",
  appId: "1:213880718677:web:c771874e9baec2a7969bdc",
  measurementId: "G-50WHXE1WSD"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
