import React from 'react';
import { NavLink } from 'react-router-dom';
import Register from '../components/Auth/register';




const Pageregister = () => {
    return (
        <div className='authPage'>
            <NavLink to="/"  >
            <img  src="../image/LogoInterGreen.png"></img>
            </NavLink>
            <NavLink to="/"  >
            <img src="../image/Mascotte 8 1.png"></img>
            </NavLink>
            <Register/>
        </div>
        
    );
};

export default Pageregister;




