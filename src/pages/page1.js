import React from 'react';
import { NavLink } from 'react-router-dom';

const Test = () => {
    return (
        <div>
            <h1>Hello</h1>
        <NavLink to="/page2" className='' >
        Activités nexity 
        </NavLink>
        </div>
    );
};

export default Test;