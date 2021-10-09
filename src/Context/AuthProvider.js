import React, { createContext } from "react";
import Usefirebase from "../hooks/Usefirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={Usefirebase()}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
