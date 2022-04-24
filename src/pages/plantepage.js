import React from 'react';
import { NavLink } from 'react-router-dom';

const Pageplante = () => {
    return (
        <div>
            <h1>Aloé Vera</h1>
            <NavLink to="/collection" >
            <boutton> Suivant</boutton>
            </NavLink>
        </div>
    );
};

export default Pageplante;