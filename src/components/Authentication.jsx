import { useState } from 'react';
import { auth, GoogleProvider } from '../firebase-config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useHistory } from 'react-router-dom';

export const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const navigateToHome = () => {
    history.push('/');
  };

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigateToHome();
    } catch (err) {
      console.error(err);
    }
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigateToHome();
    } catch (err) {
      console.error(err);
    }
  };

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, GoogleProvider);
      navigateToHome();
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      navigateToHome();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        type='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={loginWithGoogle}>Login With Google</button>
      {auth.currentUser && <button onClick={logout}>Logout</button>}
    </div>
  );
};
