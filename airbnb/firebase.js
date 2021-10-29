import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCd0bp7q93SvGI_J-tqy43N1TN_IJ1YRXE",
  authDomain: "real-estate-38e6e.firebaseapp.com",
  projectId: "real-estate-38e6e",
  storageBucket: "real-estate-38e6e.appspot.com",
  messagingSenderId: "177067360352",
  appId: "1:177067360352:web:8a30f8ea60a91a0be28305",
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const auth = firebase.auth();
export { auth };
