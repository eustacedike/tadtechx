import React from 'react';
import { useRef } from 'react';
import style from './enroll.css';



function Enroll() {

    const enroller = useRef();

    const chck = () => {
        
    console.log(window.pageYOffset);
        };

    setInterval(chck, 3000);

    if (window.pageYOffset > 4700) {
        enroller.current.style.transform = 'translateX(0%)';
    }

    return (
        <div className='Enroll' ref={enroller}>
            <div className="enroll-1">
                <h1 className='tech'>GET STARTED</h1>
                <h2>Break into the tech industry like a pro</h2>
            <button>Enroll now</button>
            </div>
            <div className="enroll-2">

            </div>
        </div>
    );

}

export default Enroll;
