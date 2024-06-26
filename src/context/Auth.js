import React, { createContext, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseApp } from "../Firebase";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(firebaseApp);

  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      //const uid = user.uid;
    } else {
      logout();
    }
  });

  async function signIn(user) {
    localStorage.setItem("@petlife:user", JSON.stringify(user));
    setUser(user);
    setIsLoading(false);
  }

  async function logout() {
    try {
      localStorage.removeItem("@petlife:user");
      setUser(null);
      setIsLoading(false);

      signOut(auth);
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
      setIsLoading(false);
    }
  }

  const obj = {
    signed: !!user,
    user: user,
    signIn,
    logout,
    isLoading: isLoading,
    auth: auth,
  };

  return <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
export default AuthContext;
