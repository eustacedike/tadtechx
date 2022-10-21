import React from 'react';
import style from './testimonials.css';
import arrow from './assets/arrow.png';
import profile from './assets/profile.png';
import { useRef } from 'react';


function Testimonials() {
    
    const carrd = useRef();

    const scrll = () => {
        carrd.current.scrollBy(240,0);
    };

    const scrllbck = () => {
        carrd.current.scrollBy(-240,0);
    };
    

  
    
      return (
        <div className='Testimonials'>

            <h2>What Our Students Are Saying</h2>
            
            <div className="testimonial-cards" ref={carrd}>
                <div className="testimonial-card test-1">
                    <div className="inner-test inn-1">
                    <div className="details">
                        <img src={profile}></img>
                        <h4>Sammy Lawson</h4>
                    </div>
                    <div className="content">
                        <p>White dwarf a still more glorious dawn awaits tingling of the spine emerged into consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds kindling the energy hidden in matter concept of the number one permanence.</p>
                    </div>
                    </div>
                </div>
                <div className="testimonial-card test-2">
                    <div className="inner-test inn-2">
                    <div className="details">
                        <img src={profile}></img>
                        <h4>Azah Anyeni</h4>
                    </div>
                    <div className="content">
                        <p>White dwarf a still more glorious dawn awaits tingling of the spine emerged into consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds kindling the energy hidden in matter concept of the number one permanence.</p>
                    </div>
                    </div>
                </div>
                <div className="testimonial-card test-1">
                    <div className="inner-test inn-1">
                    <div className="details">
                        <img src={profile}></img>
                        <h4>Chris Prince</h4>
                    </div>
                    <div className="content">
                        <p>White dwarf a still more glorious dawn awaits tingling of the spine emerged into consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds kindling the energy hidden in matter concept of the number one permanence.</p>
                    </div>
                    </div>
                </div>
                <div className="testimonial-card test-2">
                    <div className="inner-test inn-2">
                    <div className="details">
                        <img src={profile}></img>
                        <h4>David Charles</h4>
                    </div>
                    <div className="content">
                        <p>White dwarf a still more glorious dawn awaits tingling of the spine emerged into consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds kindling the energy hidden in matter concept of the number one permanence.</p>
                    </div>
                    </div>
                </div>
                <div className="testimonial-card test-1">
                    <div className="inner-test inn-1">
                    <div className="details">
                        <img src={profile}></img>
                        <h4>Sandra Peters</h4>
                    </div>
                    <div className="content">
                        <p>White dwarf a still more glorious dawn awaits tingling of the spine emerged into consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds kindling the energy hidden in matter concept of the number one permanence.</p>
                    </div>
                    </div>
                </div>
            </div>
            
           
            <div className="arrow-b">
                <img onClick={scrllbck} src={arrow} alt="" />
            </div>

            <div className="arrow">
                <img onClick={scrll} src={arrow} alt="" />
            </div>
            
        </div>
      );
    
}
  
  export default Testimonials;
  