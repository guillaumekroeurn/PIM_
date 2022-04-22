import React from 'react';
import { NavLink } from 'react-router-dom';


/*
const uploadImage = async file => {
    const formData = new FormData();
    formData.append('file', file);

    // Connect to a seaweedfs instance
};*/

const Page1 = () => {
    return (
        <div>
            <h1>Home</h1>
        <NavLink to="/page2"  >
        page2 
        </NavLink>
        <br/>
            <NavLink to="/photo" >
            [ +_+ ]
            </NavLink>
            
        </div>
        
    );
};

export default Page1;