import { useEffect, useState } from "react";
import initializauthentication from "../Firebase/Initializ.firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

initializauthentication();

const Usefirebase = () => {
  const [user, setuser] = useState({});
  //   console.log(user);

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  //   google sign in
  const googlesignin = () => {
    return signInWithPopup(auth, provider);
  };

  //   sign out
  const signout = () => {
    signOut(auth)
      .then(() => {
        setuser({});
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //   on auth state change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
      }
    });
  }, []);

  return {
    googlesignin,
    signout,
    user,
    setuser,
  };
};

export default Usefirebase;
