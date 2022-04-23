import React from 'react';
import { NavLink } from 'react-router-dom';
import Connexion from '../components/Auth/Connexion';



const Pagelogin = () => {
    return (
        <div className='authPage'>
            <NavLink to="/"  >
            <img  src="../image/LogoInterGreen.png"></img>
            </NavLink>
            <NavLink to="/"  >
            <img  src="../image/Mascotte 8 1.png"></img>
            </NavLink>
            <Connexion/>
        </div>
    );
};

export default Pagelogin;