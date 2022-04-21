import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { CameraFeed } from '../components/camera/camera.jsx';


const uploadImage = async file => {
    const formData = new FormData();
    formData.append('file', file);

    // Connect to a seaweedfs instance
};

const Page1 = () => {
    return (
        <div>
            <h1>Hello</h1>
        <NavLink to="/page2" className='' >
        Activités nexity 
        </NavLink>
            <div className="App">
                <h1>Image capture test</h1>
                <p>Capture image from USB webcamera and upload to form</p>
                <CameraFeed sendFile={uploadImage} />
            </div>
        </div>
        
    );
};

export default Page1;