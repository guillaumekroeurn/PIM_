import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '../components/menu/Menu';
import Header from '../components/Auth/header';

const Pagehome = () => {
    return (
        <div>
            <Header/>
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

export default Pagehome;