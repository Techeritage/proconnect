import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDV9hOhNhjPCpNOUpFupIXUAJUcSd_buiA",
  authDomain: "e-commerce-2a028.firebaseapp.com",
  projectId: "e-commerce-2a028",
  storageBucket: "e-commerce-2a028.appspot.com",
  messagingSenderId: "613739816489",
  appId: "1:613739816489:web:21088f031a9b525f98de38",
  measurementId: "G-8DHN4TYPLL"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
