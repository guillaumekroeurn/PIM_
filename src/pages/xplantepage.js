import React from 'react';
import { NavLink } from 'react-router-dom';

const Pageplante = () => {
    return (
        <div>
            <img className='pageplantes'  src="../image/Pageplante.jpg"></img>
            <NavLink className='suiv' to="/quizz" >
            <button>Valider ma mission</button>
            </NavLink>
        </div>
    );
};

export default Pageplante;