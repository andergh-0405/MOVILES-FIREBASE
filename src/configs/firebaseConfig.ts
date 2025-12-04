import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQapL02bE7CfHb0u72m_LEE2J1HYYkJjw",
  authDomain: "juego-42724.firebaseapp.com",
  projectId: "juego-42724",
  storageBucket: "juego-42724.firebasestorage.app",
  messagingSenderId: "713910653128",
  appId: "1:713910653128:web:27447fc854f12d1e0395fd"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const auth = initializeAuth(firebase, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});