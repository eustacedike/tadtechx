import React from 'react';
import { useRef } from 'react';
import style from './hero.css';
import curve from './assets/curve.svg';
import cert from './assets/certificate.png';
import scholarship from './assets/scholarship.png';
import cart from './assets/cart.png';
import vector from './assets/Vector.png';
import group from './assets/group.png';
import laptop from './assets/laptop.png';

function Hero () {
    
    const roller = useRef();
    const indicate = useRef();

    const typed = useRef();

    // const tryyyy = () => {
    //     intro.current.style.display = 'none';
    // };
    var zts = -3;

    const rollFunction = () => {
        roller.current.scrollBy(100,0);

        if (zts < 41) {zts+=22;};
        indicate.current.style.left = `${zts}px`;    
    };

    const rollbackFunction = () => {
        roller.current.scrollBy(-100,0);

        if (zts > -3) {zts-=22;};
        indicate.current.style.left = `${zts}px`;
    };

        return (
            <div className='Hero'>
                <div className='banner'>
                    <div className='rolls' ref={roller}>
                        <div className='roll-1'>
                            <div className='intro'>
                                <h1 className='animate-a'>Become <span className='tech'>Tech</span> Savy By</h1><h1 className='animate-b'>Learning With Us</h1>
                                <div className="intro-small">
                                    <p className='p1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> 
                                <p className='p2'>Voluptate voluptatibus autem numquam delectus?</p>
                                </div>
                                <button className='sign'>Learn more</button>
                                <div className="curve-cont">
                                    <img className='curve' src={curve} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='roll-2'>
                            <div className='intro dat2'>
                                <h1 className='animate-c'>Maecenas <span className='tech'>dignissim</span> tr
                                justo eget nulla rutr</h1>
                                <div className="intro-small">
                                    <p className='p1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> 
                                    <p className='p2'>Voluptate voluptatibus autem numquam delectus?</p>
                                </div>
                                <button className='sign'>Learn more</button>
                                
                            </div>
                            <div className='intro-2'>
                                <img src={group} alt=""></img>
                            </div>
                        </div>
                        <div className='roll-2'>
                            
                                <div className='intro dat3'>
                                <h1 className='animate-c'>Material Kit Premium</h1>
                                <div className="intro-small">
                                    <p className='p1'>Start your development with a badass material UI </p> 
                                    <p className='p2'>Kit for your projects inspired by Material Design</p>
                                </div>
                                <button className='sign'>Shop Now</button>
                                
                            
                            </div>
                            <div className='intro-2'>
                                <img src={laptop} alt=""></img>
                            </div>
                        </div>
                    </div>

                    <div className='next'>
                        <img src={vector} onClick={rollFunction}></img>
                    </div>
                    <div className='previous'>
                        <img src={vector} onClick={rollbackFunction}></img>
                    </div>

                    <div className='indicator'>
                        <div ref={indicate} className='c1'></div>
                        <div className='c2'></div>
                        <div className='c2'></div>
                        <div className='c2'></div>
                    </div>

                    <div className='options'>
                        <div className='inner'>
                            <b><img className='opt-icons' src={scholarship}></img>Scholarships</b>
                            <b><img className='opt-icons' src={cert}></img>Certificates</b>
                            <b><img className='opt-icons' src={cart}></img>Our Store</b>
                        </div>
                    </div>
                </div>
            </div>
        );
    
}

export default Hero;
