import React from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase-config';
import { useState } from "react";
import { NavLink } from 'react-router-dom';


console.log(Header);
function Header() {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  const login = async () => {
    try {
    const user = await signInWithEmailAndPassword(
      auth, 
      loginEmail,
      loginPassword
      );
    console.log(user)
  } catch (error) {
    console.log(error.message);
    }
  };

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth, 
        registerEmail,
        registerPassword
        );
      console.log(user)
    } catch (error) {
      console.log(error.message);
      }
    };

    const logout = async () => {
      await signOut(auth);
    };

    return (
        <div className='compte'>
          <h4>Hello {user?.email}</h4>
          <NavLink to="/">
          <button className='logout-btn' onClick={logout}>Déconexion</button>
          </NavLink>
        </div>
    );
  };

export default Header;