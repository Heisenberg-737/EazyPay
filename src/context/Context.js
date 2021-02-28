import React, { useContext, useState, useEffect } from "react";
import { auth } from "../config/firebaseConfig";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState();
  const [hex, setHex] = useState();

  function signup(email, password) {
    console.log(email, "      ", password);
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    console.log(email, "      ", password);
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }
  function setLoggedInUserDetails(user) {
    setUserDetails(user);
  }
  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }
  function setNewHex(hex) {
    return setHex(hex);
  }
  function getHex() {
    return hex;
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userDetails,
    getHex,
    setNewHex,
    setLoggedInUserDetails,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
