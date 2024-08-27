import { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import app from '../Firebase/firebase.config';

import axios from 'axios';
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setLoading(true);
      console.log(currentUser);
      const userEmail = { email: currentUser?.email || user?.email };
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        axios
          .post(
            'https://car-doctor-server-blue-ten.vercel.app/jwt',
            userEmail,
            {
              withCredentials: true,
            }
          )
          .then(res => {
            console.log(res.data);
          });
      } else {
        axios
          .post(
            'https://car-doctor-server-blue-ten.vercel.app/logout',
            userEmail,
            {
              withCredentials: true,
            }
          )
          .then(res => {
            console.log(res.data);
          });
      }
    });

    return () => {
      unSubscribe();
    };
  }, [auth, user]);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const googleProvider = new GoogleAuthProvider();

  const logInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const updateUser = (name, photo) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const authInfo = {
    user,
    loading,
    updateUser,
    createUser,
    logIn,
    logOut,
    logInWithGoogle,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
