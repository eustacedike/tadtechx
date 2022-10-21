import React from 'react';
import style from './services.css';
import blog1 from './assets/blog1.png';
import arrow from './assets/vector-right.png';
import { useRef } from 'react';


function Services() {
    
    const carrd = useRef();

    const scrll = () => {
        carrd.current.scrollBy(240,0);
    };
    const scrllb = () => {
        carrd.current.scrollBy(-240,0);
    };
    

  
    
      return (
        <div className='Services'>

            <h2>Our Services</h2>
            
            <div className="cards" ref={carrd}>
                <div className='card'>
                    <img src={blog1} alt=""></img>
                    <h4>ICT Training Centre</h4>
                    <p>Progressively incentivize coperative systems through technically sound functionalities</p>
                </div>
                <div className='card'>
                    <img src={blog1} alt=""></img>
                    <h4>Drop Shipping Services</h4>
                    <p>Progressively incentivize coperative systems through technically sound functionalities</p>
                </div>
                <div className='card'>
                    <img src={blog1} alt=""></img>
                    <h4>Web Design and Hosting</h4>
                    <p>Progressively incentivize coperative systems through technically sound functionalities</p>
                </div>
                <div className='card'>
                    <img src={blog1} alt=""></img>
                    <h4>Business Development</h4>
                    <p>Progressively incentivize coperative systems through technically sound functionalities</p>
                </div>
                <div className='card'>
                    <img src={blog1} alt=""></img>
                    <h4>ICT Training Centre</h4>
                    <p>Progressively incentivize coperative systems through technically sound functionalities</p>
                </div>
            </div>
            
           
            <div className="arrowb">
                <img onClick={scrllb} src={arrow} alt="" />
            </div>
            <div className="arrow">
                <img onClick={scrll} src={arrow} alt="" />
            </div>
        </div>
      );
    
}
  
  export default Services;
  