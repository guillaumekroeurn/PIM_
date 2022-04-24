import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Cam from '../components/camera/cam';

const Pagephoto = () => {

    const navigate = useNavigate()

    return (
        <div className='Pagephoto'>
            <div className='head'>
                <button className='back' onClick={() => navigate(-1)}>Retour</button>
                <img className='tuto'  src="../image/tuto.png"></img>
            </div>
            <h1>Scanne ta plante !</h1>
            <br/>
            <Cam/>
        </div>
    );
};

export default Pagephoto;