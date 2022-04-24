import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='menu'>
      <NavLink to="/mission" className='leftright' >
        <div className='led'></div>
        <input className='icomenu' type='image' src='../image/light.png' alt='light' id='light'/>
        <p className='nameico'>Mission</p>
      </NavLink>
      <NavLink to="/photo" >
        <img  className="Gopht-btn" src="../image/photo2.png"/>
        </NavLink>
      <NavLink to="/collection" className='leftright'>
        <div className='led'></div>
        <input className='icomenu' type='image' src='../image/plant.png' alt='plant' id='plant'/>
        <p className='nameico'>Collection</p>
      </NavLink>
    </div>
  );
};

export default Menu;