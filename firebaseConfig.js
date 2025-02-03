import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCKKbmFg79OmoqUPbd3up6SkqkCVo5kAys",
  authDomain: "proconnect-732e6.firebaseapp.com",
  projectId: "proconnect-732e6",
  storageBucket: "proconnect-732e6.firebasestorage.app",
  messagingSenderId: "1003356482600",
  appId: "1:1003356482600:web:2979f5d8f3d83ed6a6591d",
  measurementId: "G-G4P0E3RSRY",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
