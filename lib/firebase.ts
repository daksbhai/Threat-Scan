import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcoHwrb0S0Fb4TIk5_FtaeCIBTahK0miU",
  authDomain: "threatscan-ef57c.firebaseapp.com",
  projectId: "threatscan-ef57c",
  storageBucket: "threatscan-ef57c.firebasestorage.app",
  messagingSenderId: "810607960494",
  appId: "1:810607960494:web:3d6a16f973c33ae3e0a83f"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
