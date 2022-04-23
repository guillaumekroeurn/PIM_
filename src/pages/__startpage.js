import React from 'react';
import { NavLink } from 'react-router-dom';

const Pagestart = () => {
    return (
        <div className='authPage'>
            <NavLink to="/"  >
                <img  src="../image/LogoInterGreen.png"></img>
            </NavLink>
            <NavLink to="/"  >
                <img  src="../image/Mascotte 8 1.png"></img>
            </NavLink>
            <NavLink to="/inscription" className='authPage' >
                <button className='auth-btn' > S'inscrire</button>
            </NavLink>
            <br/>
            <NavLink to="/connexion" className='authPage' >
                <button className='auth-btn2'>S'identifier </button>
            </NavLink>
        </div>
    );
};

export default Pagestart;