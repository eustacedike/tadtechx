import React from 'react';
import style from './services.css';
import blog1 from './assets/blog1.png';
import arrow from './assets/vector-right.png';
import { useRef } from 'react';


function Services() {


    const offeredServices = [
        {id: 1, title: "ICT Training Centre", preview: blog1, about: "Progressively incentivize coperative systems through technically sound functionalities"},
        {id: 2, title: "Drop Shipping Services", preview: blog1, about: "Progressively incentivize coperative systems through technically sound functionalities"},
        {id: 3, title: "Web Design and Hosting", preview: blog1, about: "Progressively incentivize coperative systems through technically sound functionalities"},
        {id: 4, title: "Business Development", preview: blog1, about: "Progressively incentivize coperative systems through technically sound functionalities"},
        {id: 5, title: "ICT Training Centre", preview: blog1, about: "Progressively incentivize coperative systems through technically sound functionalities"},
        
        
      ];
    
    const carrd = useRef();

    const scrll = () => {
        carrd.current.scrollBy(240,0);
    };
    const scrllb = () => {
        carrd.current.scrollBy(-240,0);
    };


    // const autScrll = () => {

    //     if (carrd.current.scrollWidth - carrd.current.scrollLeft <= carrd.current.clientWidth * 1.25) {
    //         carrd.current.scroll(0,0);
    //     } else {
    //         carrd.current.scrollBy(240,0);
    //     }
            
        
    // };
    
    // setInterval (autScrll, 3000);

  
    
      return (
        <div className='Services'>

            <h2>Our Services</h2>
            
            <div className="cards" ref={carrd}>
                {offeredServices.map(eachService => {
                    return (
                        <div key={eachService.id} className="card">
                            <img src={eachService.preview} alt={eachService.title}></img>
                            <h4>{eachService.title}</h4>
                            <p>{eachService.about}</p>
                        </div>
                    )})
                }
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
  