import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase.js";
import { onAuthStateChanged, getRedirectResult } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result && result.user) {
          setCurrentUser(result.user);
          setUserLoggedIn(true);
        }
      })
      .catch((err) => console.error("Redirect error:", err));

    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  function initializeUser(user) {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  }

  // ✅ FIX — always render children
  return (
    <AuthContext.Provider value={{ currentUser, userLoggedIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
