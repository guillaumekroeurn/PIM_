import React from 'react';
import { NavLink } from 'react-router-dom';
import Cam from '../components/camera/cam';
import Scananimation from '../components/camera/Scananimation';


const Page2 = () => {
    return (
        <div>
            <h1>Prout</h1>
            <NavLink to="/" className='' >
            retour principal
            </NavLink>
            <Scananimation/>
            <Cam/>
        </div>
    );
};

export default Page2;