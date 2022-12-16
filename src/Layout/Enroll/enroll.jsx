import React from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import style from './enroll.css';
import { useEffect } from 'react';




function Enroll() {


    const enroller = useRef();


    const linkStyle = {
        textDecoration: 'none',
        color: 'unset',
      }
    
    // const chck = () => {
        
    // console.log(enroller.current.getBoundingClientRect().top);
    // var fromTheTop = enroller.current.getBoundingClientRect().top;
    
    // if (window.pageYOffset > fromTheTop) {
    //     enroller.current.style.transform = 'translateX(0%)';
    // } else {
    //     enroller.current.style.transform = 'translateX(-100%)';
    // }
    //     };



    // useEffect(() => {
   
    //     window.removeEventListener('scroll', chck);
    //     window.addEventListener('scroll', chck, { passive: true });
    //     return () => window.removeEventListener('scroll', chck);
    // }, []);


    return (
        <div className='Enroll' ref={enroller}>
            <div className="enroll-1">
                <h1 className='tech'>GET STARTED</h1>
                <h2>Break into the tech industry like a pro</h2>
            <button> <Link style={linkStyle} to='/application'>Enroll now</Link></button>
            </div>
            <div className="enroll-2">

            </div>
        </div>
    );

}

export default Enroll;
