import React from 'react';
import { NavLink } from 'react-router-dom';
import Auth from '../components/Auth/Auth';


const Test = () => {
    return (
        <div>
            <h1>Hello</h1>
        <NavLink to="/page2" className='' >
        Activités nexity 
        </NavLink>
        
        <Auth />
        </div>
    );
};

export default Test;