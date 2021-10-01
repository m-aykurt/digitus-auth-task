import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}
// auth context yapısı kuruldu ve firebase bağlantısı yapıldı
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  

  // tüm fonksiyonlar bu comp. yapıldı ve provider aracılığıyla tüm comp. dağıtıldı
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
    // then promise ile signup olan kişinin email ine verification maili gidiyor
    .then((userCredential) => {
      userCredential.user.sendEmailVerification();
      auth.signOut();
      alert("Send verification mail. Please check your mail box.");
      // console.log(userCredential.user.sendEmailVerification());
    })
  }



  function login(email, password) {
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

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  function loginAuth() {
    console.log(currentUser);
  }
  // useEffect hook u ile user değişikliğini takip ettik
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, [currentUser]);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    loginAuth,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
