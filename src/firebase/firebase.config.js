// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrA0YTGKlbM06GaFiFaFd7ywt0_6lDETk",
  authDomain: "chef-recipie-assignment10.firebaseapp.com",
  projectId: "chef-recipie-assignment10",
  storageBucket: "chef-recipie-assignment10.appspot.com",
  messagingSenderId: "970491178333",
  appId: "1:970491178333:web:ee59580705d0889a43ccb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;