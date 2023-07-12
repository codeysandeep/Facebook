import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBg3nhShBDZyprEzHPTgcOZ_3v2C54RZhw",
  authDomain: "application-2point0.firebaseapp.com",
  projectId: "application-2point0",
  storageBucket: "application-2point0.appspot.com",
  messagingSenderId: "257518642918",
  appId: "1:257518642918:web:1087f531ae479e9676fd27",
};

const app = initializeApp(firebaseConfig);

const database = getFirestore(app);
const storage = getStorage(app);

export { database, storage };
