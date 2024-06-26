import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD4BhkWrj9YxGsoNbQqOK-zvfwU-ZaRB0Y",
  authDomain: "metacortex-4691c.firebaseapp.com",
  databaseURL: "https://metacortex-4691c.firebaseio.com",
  projectId: "metacortex-4691c",
  storageBucket: "metacortex-4691c.appspot.com",
  messagingSenderId: "203429531174",
  appId: "1:203429531174:web:b04f04f0f27d26c69660e7",
};

const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp };
