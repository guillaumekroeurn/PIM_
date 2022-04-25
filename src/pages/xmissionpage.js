import React from 'react';
import Menu from '../components/menu/Menu';
import Header from '../components/Auth/header';

const Pagemission = () => {
    return (
        <div>
            <Header/>
            <img className='pagemission'  src="../image/QuizzClassementfinale.jpg"></img>
            <Menu/>
        </div>
    );
};

export default Pagemission;