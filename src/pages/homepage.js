import React from 'react';
import Menu from '../components/menu/Menu';
import Header from '../components/Auth/header';

const Pagehome = () => {
    return (
        <div>
            <Header/>
            <h1>Voici la mission de votre team</h1>
            <div>
            <h2>Votre mission :<br/>Scannez 20 plantes!</h2>
            <p>Gagne des points et montes dans le classement !</p>
            </div>
            <Menu/>
        </div>
    );
};

export default Pagehome;