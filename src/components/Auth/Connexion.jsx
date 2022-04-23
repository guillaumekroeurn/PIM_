import React from 'react';
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase-config';
import { useState } from "react";

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
         <h3> Login</h3>
         <div className="authPage">
         <input className='authInput' placeholder="Email..." 
         onChange={(event) => {
          setLoginEmail(event.target.value);
        }}/>
        </div>
         <div className="authPage">
         <input className='authInput' placeholder="Password..." 
         onChange={(event) => {
          setLoginPassword(event.target.value);
        }}/>
        </div>
        <div className="authPage"></div>
         <button className='auth-btn' onClick={login}> Login</button>
       </div>

       <h4> User Logged In:</h4>
       {user?.email}

       <button className='auth-btn' onClick={logout}> Sign Out</button>
      </div>
    );
  };

export default Connexion;