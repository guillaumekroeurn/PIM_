import React from 'react';
import { NavLink } from 'react-router-dom';
import Register from '../components/Auth/register';




const Page1 = () => {
    return (
        <div>
            <h1>Inter</h1>
        <NavLink to="/page2"  >
        page2 
        </NavLink>
        <br/>
            <NavLink to="/photo" > [ +_+ ] </NavLink>
            <Register/>
        </div>
        
    );
};

export default Page1;




