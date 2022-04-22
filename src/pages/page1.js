import React from 'react';
import { NavLink } from 'react-router-dom';
import Auth from '../components/Auth/Auth';




const Page1 = () => {
    return (
        <div>
            <h1>Home</h1>
        <NavLink to="/page2"  >
        page2 
        </NavLink>
        <br/>
            <NavLink to="/photo" > [ +_+ ] </NavLink>
            <Auth />
        </div>
        
    );
};

export default Page1;