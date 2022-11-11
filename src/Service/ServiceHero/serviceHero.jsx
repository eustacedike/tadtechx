import React from 'react';
import style from './serviceHero.css';


//Images
import webdez from './assets/webdesign.png';
import graphdez from './assets/graphdesign.png';

//Icons
import iconn from './assets/vector-right.png';
import locate from './assets/locate.png';
import gridd from './assets/grid.png';
import person from './assets/person.png';



function serviceHero(props) {

    const heroTags = [
        { id: 1, title: "Business Branding", icon: webdez },
        { id: 2, title: "Graphics Design", icon: graphdez },
        { id: 3, title: "Web Design and Hosting", icon: webdez },
        { id: 4, title: "Business Development", icon: webdez },
        { id: 5, title: "ICT Training", icon: webdez },
        { id: 6, title: "Drop Shipping", icon: webdez },
        { id: 7, title: "Data Analysis", icon: webdez },
        { id: 8, title: "Content Management System", icon: webdez },


    ];


    return (
        <div className='ServiceHero'>
            <div className={props.theBG}>

                <div className="inner-banner"></div>

                <div className='bgg'></div>

                <div className="design-a"></div>
                <div className="design-b"></div>

                <div className="serve-courses">

                    {props.theTags.map(eachHeroTag => {
                        return (
                            <div key={eachHeroTag.id} className="sCourse">
                                <img src={eachHeroTag.icon} alt="" />
                                <h4>{eachHeroTag.title}</h4>
                            </div>
                        )
                    })}


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
