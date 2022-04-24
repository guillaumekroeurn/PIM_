import React, {useRef, useEffect, useState} from 'react';
import CircularIntegration from './loading';
import Scananimation from './Scananimation';



function Cam() {
    const videoRef = useRef(null);
    const photoRef = useRef(null);

    const [hasPhoto, setHasPhoto] = useState(false);

    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({
                video: { width: 1280, height:720 }
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

    const takePhoto = () => {
        const width =298; /*modifiable poour la photo*/
        const height = width / (16/9);

        let video = videoRef.current;
        let photo = photoRef.current;

        let ctx = photo.getContext('2d');
        ctx.drawImage(video, 0, 0, width, height);
        setHasPhoto(true);
    }

    const closePhoto = () => {
        let photo = photoRef.current;
        let ctx = photo.getContext('2d');

        ctx.clearRect(0, 0, photo.width, photo.height);

        setHasPhoto(false);
    }

    useEffect(() => {
        getVideo();
    }, [videoRef])

    return (
        <div className='Test'>
            <div className='Cam'>
                <video ref={videoRef}></video>
                <div className='menuphoto'>
                    <img className='btnphoto' onClick={takePhoto} src="../image/btnphoto.png"></img>
                </div>
            </div>
            <Scananimation/>
            <div className={'result '+ (hasPhoto ? 'hasPhoto' 
            : '')}>
                <button className='PHOTO' onClick={closePhoto}>CLOSE</button>
                <canvas ref={photoRef}></canvas>
                <div className='footerscan'>
                    <h1>Scan pour savoir c'est quelle plante !</h1>
                    <div className='btnAnnalyse'>
                        <CircularIntegration />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cam;