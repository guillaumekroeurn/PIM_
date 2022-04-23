import React from 'react';
import { NavLink } from 'react-router-dom';
import Cam from '../components/camera/cam';

const Pagephoto = () => {
    return (
        <div className='Pagephoto'>
            <h1>Prout</h1>
            <NavLink to="/" >
            Home
            </NavLink>
            <br/>
            <NavLink to="/" >
            page2
            </NavLink>
            <Cam/>
        </div>
    );
};

export default Pagephoto;