import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import axios from "axios";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //logout
  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("us", currentUser);
      if (currentUser?.email) {
        const userData = { email: currentUser?.email };
        axios
          .post("http://localhost:3000/jwt", userData, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("token after jwt", res.data);
            // const token = res.data.token
            // localStorage.setItem("token",token )
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
    return () => unSubscribe();
  }, []);

  const userInfo = {
    createUser,
    loginUser,
    logOut,
    loading,
    user,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
