import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '../components/menu/Menu';



const Page2 = () => {
    return (
        <div>
            <h1>Page2</h1>
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

export default Page2;