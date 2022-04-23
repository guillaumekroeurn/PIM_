import React from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {auth} from '../../firebase-config';
import { useState } from "react";


console.log(Register);
function Register() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })

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

        return(
            <div className='authPage'>
                <h3>Register User</h3>
                <div className='authPage'>
                    <input  className='authInput' placeholder="Email..." 
                    onChange={(event) => {setRegisterEmail(event.target.value);
                    }}/>
                </div>
                <div className='authPage'>
                    <input className='authInput' placeholder="Password..."
                    onChange={(event) => {setRegisterPassword(event.target.value);
                    }}/>
                </div>
                <div className='authPage'>
                    <button className='auth-btn' onClick={register}> Create User</button>
                </div>
            </div>
        );
    };

export default Register;