
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEv_1M4_110IVwRm7svM8PaIzfOPH6hDs",
  authDomain: "mensajeria-app-8ef0c.firebaseapp.com",
  projectId: "mensajeria-app-8ef0c",
  storageBucket: "mensajeria-app-8ef0c.firebasestorage.app",
  messagingSenderId: "1081692077200",
  appId: "1:1081692077200:web:170d38eb8f60cf65f0ac15"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

//export const auth = getAuth(firebase);
export const auth = initializeAuth(firebase, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});