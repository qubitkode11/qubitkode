import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCNFPMQypAGSy2Gw46ld5hp8B1fZuMkIEI",
  authDomain: "qubitkode-c6c7c.firebaseapp.com",
  projectId: "qubitkode-c6c7c",
  storageBucket: "qubitkode-c6c7c.firebasestorage.app",
  messagingSenderId: "803135837186",
  appId: "1:803135837186:web:e21e09097725447191831b",
  measurementId: "G-D91721XE00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { app, analytics };
