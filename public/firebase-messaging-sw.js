importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

const firebaseConfig = {
    apiKey: "AIzaSyAAufX1z6AgiVsTKXfiV_mCD85dA3Cmlw0",
    authDomain: "home-app-669ba.firebaseapp.com",
    projectId: "home-app-669ba",
    storageBucket: "home-app-669ba.appspot.com",
    messagingSenderId: "983310107946",
    appId: "1:983310107946:web:3cd486f744383eb30aca53"
  };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});