import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyAAufX1z6AgiVsTKXfiV_mCD85dA3Cmlw0",
    authDomain: "home-app-669ba.firebaseapp.com",
    projectId: "home-app-669ba",
    storageBucket: "home-app-669ba.appspot.com",
    messagingSenderId: "983310107946",
    appId: "1:983310107946:web:3cd486f744383eb30aca53"
  };

  export const app = initializeApp(firebaseConfig);
  export const messaging = getMessaging(app);