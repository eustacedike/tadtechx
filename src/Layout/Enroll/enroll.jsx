import React from 'react';
import { useRef } from 'react';
import style from './enroll.css';



function Enroll() {


    const enroller = useRef();

    const chck = () => {
        
    // console.log(enroller.current.getBoundingClientRect().top);
    var fromTheTop = enroller.current.getBoundingClientRect().top;
    
    if (window.pageYOffset > fromTheTop) {
        enroller.current.style.transform = 'translateX(0%)';
    } else {
        enroller.current.style.transform = 'translateX(-100%)';
    }
        };

    setInterval(chck, 50);

    window.addEventListener = ('scroll', chck);


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
