import React from 'react';
import { NavLink } from 'react-router-dom';
import Cam from '../components/camera/cam';


const Page2 = () => {
    return (
        <div>
            <h1>Prout</h1>
            <NavLink to="/" >
            retour principal
            </NavLink>
            <Cam/>
        </div>
    );
};

export default Page2;