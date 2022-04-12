import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDRnGwSClwurri_zyyoHVrmVBfRoeRZm1g",
    authDomain: "netflix-clone-yt-c146d.firebaseapp.com",
    projectId: "netflix-clone-yt-c146d",
    storageBucket: "netflix-clone-yt-c146d.appspot.com",
    messagingSenderId: "311814557143",
    appId: "1:311814557143:web:67692d1ba614539b058f92"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebaseApp.auth();

  export { auth };