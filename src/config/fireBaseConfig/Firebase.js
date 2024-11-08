// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfDseX7gRCCubEtOEDuxlF_Xg3TqxZR1g",
  authDomain: "fir-react-20a98.firebaseapp.com",
  databaseURL: "https://fir-react-20a98-default-rtdb.firebaseio.com",
  projectId: "fir-react-20a98",
  storageBucket: "fir-react-20a98.firebasestorage.app",
  messagingSenderId: "503343604907",
  appId: "1:503343604907:web:eb984b8a2bd3b3c96a03ee",
  measurementId: "G-DY3DXCZ0PW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;