// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyA5iWSQw61-km2u2XusWWgy6SX3wQH24x4",
    authDomain: "forpush-notify.firebaseapp.com",
    projectId: "forpush-notify",
    storageBucket: "forpush-notify.appspot.com",
    messagingSenderId: "565931321714",
    appId: "1:565931321714:web:10907b4c5ceeb765cc95eb",
    measurementId: "G-F2412L8SLH"
  };

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});