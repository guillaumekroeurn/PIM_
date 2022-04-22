import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyCnAXPeDU5B9xVzyooDksnZa61rNvS3ksI",
  authDomain: "pimm-c6805.firebaseapp.com",
  projectId: "pimm-c6805",
  storageBucket: "pimm-c6805.appspot.com",
  messagingSenderId: "304591386555",
  appId: "1:304591386555:web:142bccd79ebab7de5ab69e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);