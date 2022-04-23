import React from 'react';
import { signOut } from "firebase/auth";
import {auth} from '../../firebase-config';
import { useState } from "react";
import { NavLink } from 'react-router-dom';


console.log(Header);
function Header() {

    const [user] = useState({});

    const logout = async () => {
      await signOut(auth);
    };

    return (
        <div className='compte'>
            <h4>Hello</h4>
           <p>{user?.email}</p>
        <NavLink to="/">
        <button className='logout-btn' onClick={logout}>Déconexion</button>
        </NavLink>
        </div>
    );
  };

export default Header;