import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '../components/menu/Menu';

const Page3 = () => {
    return (
        <div>
            <NavLink to="/" >
            Home
            </NavLink>
            <br/>
            <NavLink to="/photo" >
            [ +_+ ]
            </NavLink>
            <Menu/>
        </div>
    );
};

export default Page3;