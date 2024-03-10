import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDQ-_llxZZ3UT4hXZkIGClzQI4oY0hjqp0",
  authDomain: "roamingo-50b61.firebaseapp.com",
  databaseURL: "https://roamingo-50b61-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "roamingo-50b61",
  storageBucket: "roamingo-50b61.appspot.com",
  messagingSenderId: "1037291281888",
  appId: "1:1037291281888:web:458fa79a7f1644cc17df85",
  measurementId: "G-NEYC1TRF0C"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export {database};