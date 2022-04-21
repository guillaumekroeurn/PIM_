import React, {useRef, useEffect, useState} from 'react';
import { NavigationType } from 'react-router-dom';


function Cam() {
    const videoRef = useRef(null);
    const photoRef = useRef(null);

    const [hasPhoto, setHasPhoto] = useState(false);

    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({
                video: { width: 1920, height:1080 }
            })
            .then(stream =>{
                let video = videoRef.current;
                video.srcObject = stream;
                video.play();
            })
            .catch(err => {
                console.error(err);
            })
    }

    useEffect(() => {
        getVideo();
    }, [videoRef])


    return (
        <div className='Test'>
            <div className='Cam'>
                <video ref={videoRef}></video>
                <button className='PHOTO'>[ +_+ ]</button> 
            </div>
            <div className={'result'+ (hasPhoto ? 'hasPhoto' 
            : '')}>
                <canvas ref={photoRef}></canvas>
                <button>CLOSE!</button>

            </div>
        </div>
    );
};

export default Cam;