import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = (location, history) => {
    setIsLoading(true);

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;

        const destination = location?.state?.from || '/';
        history.replace(destination);
        setAuthError('');

      }).catch((error) => {
        setAuthError(error.message);
      }).finally(() => setIsLoading(false));
  }

  //Observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
      }
      else {
        setUser({})
      }
      setIsLoading(false);

    });
    return () => unsubscribed;
  }, [user.email])

  const logOut = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => { })
      .finally(() => setIsLoading(false))
  }

  const handleUserRegister = (email, password, name, history) => {
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('');
        const newUser = { email, displayName: name };
        setUser(newUser);

        // save data to database
        // saveUser(email, name, 'POST');

        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });

        history.replace('/');
      })
      .catch((error) => {
        setAuthError(error.message);
        // console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  const handleUserLogin = (email, password, location, history) => {
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    isLoading,
    signInUsingGoogle,
    logOut,
    handleUserRegister,
    handleUserLogin,
    authError


  }
}

export default useFirebase;