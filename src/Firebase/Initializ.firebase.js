import { initializeApp } from "firebase/app";
import firebaseConfig from "./Config.Firebase";

const initializauthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializauthentication;
