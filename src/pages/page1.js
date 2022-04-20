import React from 'react';
import { NavLink } from 'react-router-dom';

const Test = () => {
    return (
        <div>
            <h1>Hello</h1>
        <NavLink to="/page2" className='' >
        Activités nexity 
        </NavLink>
        <p>
        <label for="imageFile">Upload a photo of yourself:</label>
        <input type="file" id="imageFile" capture="user" accept="image/*"/>
        </p>
        </div>
    );
};

export default Test;