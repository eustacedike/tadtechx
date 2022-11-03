import React from 'react';
import style from './serviceHero.css';


//Icons
import iconn from './assets/vector-right.png';
import locate from './assets/locate.png';
import gridd from './assets/grid.png';
import person from './assets/person.png';



function serviceHero() {

    return (
        <div className='ServiceHero'>
            <div className="service-banner">
                
                <div className="inner-banner"></div>
                
                <div className="bgg"></div>

                <div className="design-a"></div>
                <div className="design-b"></div>

                <div className="serve-courses">
                    <div className="sCourse">
                        <h4>Business Branding</h4>
                    </div>
                    <div className="sCourse">
                        <h4>Graphics Design</h4>
                    </div>
                    <div className="sCourse">
                        <h4>Web Design and Hosting</h4>
                    </div>
                    <div className="sCourse">
                        <h4>Business Development</h4>
                    </div>
                    <div className="sCourse">
                        <h4>ICT Training</h4>
                    </div>
                    <div className="sCourse">
                        <h4>Drop Shipping</h4>
                    </div>
                </div>

                
            </div>
            <div className="service-stats">
                    <div className="service-stat">
                        <img src={person} alt="" />
                        <div>
                            <h4>90+</h4>
                            <p>Clients</p>
                        </div>
                    </div>
                    <div className="service-stat">
                        <img src={locate} alt="" />
                        <div>
                            <h4>30+</h4>
                            <p>Countries</p>
                        </div>
                    </div>
                    <div className="service-stat">
                        <img src={gridd} alt="" />
                        <div>
                            <h4>50+</h4>
                            <p>Projects</p>
                        </div>
                    </div>
                </div>

        </div>
    );

}

export default serviceHero;
