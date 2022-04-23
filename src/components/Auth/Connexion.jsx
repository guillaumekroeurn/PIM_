import React from 'react';
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase-config';
import { useState } from "react";
import { NavLink } from 'react-router-dom';

console.log(Connexion);
function Connexion() {
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

    const logout = async () => {
      await signOut(auth);
    };


    return (
      <div>
        <div className="authPage">
          <h3>Connexion</h3>
          <div className="authPage">
            <input type="email" className='authInput' placeholder="Email..." 
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}/>
          </div>
          <br/><br/>
          <div className="authPage">
            <input type="password" className='authInput' placeholder="Mot de passe..." 
            onChange={(event) => {setLoginPassword(event.target.value);
            }}/>
          </div>
          <br/><br/><br/><br/><br/>
          <NavLink to="/mission" className="authPage">
          <button className='auth-btn' onClick={login}> Connexion</button>
         </NavLink>
       </div>
      </div>
    );
  };

export default Connexion;