import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyA5iWSQw61-km2u2XusWWgy6SX3wQH24x4",
  authDomain: "forpush-notify.firebaseapp.com",
  projectId: "forpush-notify",
  storageBucket: "forpush-notify.appspot.com",
  messagingSenderId: "565931321714",
  appId: "1:565931321714:web:10907b4c5ceeb765cc95eb",
  measurementId: "G-F2412L8SLH"
};

const app = initializeApp(firebaseConfig);
let messaging

if(app != null){
   messaging = getMessaging(app);

}
export const requestForToken = () => {
  return getToken(messaging, { vapidKey: 'BGa_CDnt-LFV9jiBr_x0YjKbcl6Q_kw6ORfJD8cYwgSyRhpcy5xyM4stbxq5GxML5OhJ--gLXcpufozIy9ddytM' })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload)
      resolve(payload);
    });
  });