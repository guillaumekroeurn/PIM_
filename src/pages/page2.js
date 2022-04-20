import React from 'react';
import { NavLink } from 'react-router-dom';

const page2 = () => {
    return (
        <div>
               <h1>Prout</h1>
        <NavLink to="/" className='' >
        retour principal
        </NavLink>
        </div>
    );
};

export default page2;