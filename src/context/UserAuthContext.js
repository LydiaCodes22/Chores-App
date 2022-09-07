import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";

export const userAuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [chores, setChores] = useState([]);
  const [familyID, setFamilyID] = useState(null);
  const [userID, setUserID] = useState(null);
  const [userRole, setUserRole] = useState(null);

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser) {
        setUser(currentuser.uid);
        const localStoredFamilyID = localStorage.getItem("familyID");
        const localStoredUserID = localStorage.getItem("userID");
        const localStoredRole = localStorage.getItem("userRole");
        setFamilyID(localStoredFamilyID);
        setUserID(localStoredUserID);
        setUserRole(localStoredRole);
      } else {
        setUser(null);
        setFamilyID(null);
        setUserID(null);
        setUserRole(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <userAuthContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        user,
        logIn,
        signUp,
        logOut,
        chores,
        setChores,
        familyID,
        userID,
        userRole,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
};

export function useUserAuth() {
  return useContext(userAuthContext);
}
