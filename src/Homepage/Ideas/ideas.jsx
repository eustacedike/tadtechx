import React from 'react';
import style from './ideas.css';
import { useRef } from 'react';
import pexels from './assets/pexels.png';
import rec from './assets/rec7.png';


function Ideas() {

    const ideaa = useRef();

    const scrll = () => {
        ideaa.current.scrollBy(240,0);
    };
    const scrllb = () => {
        ideaa.current.scrollBy(-240,0);
    };


    return (
        <div className='Ideas'>

            <h2>Our App Ideas</h2>

            <div className="idea-main">
                <div className='ideas-1'>
                    <img src={pexels} alt="" />
                </div>
                <div className='ideas-2' ref={ideaa}>
                    <div className='idea-card'>
                        <img src={rec}></img>
                        <h3>Web 3 app</h3>
                    </div>
                    <div className='idea-card'>
                        <img src={rec}></img>
                        <h3>E-learning platform</h3>
                    </div>
                    <div className='idea-card'>
                        <img src={rec}></img>
                        <h3>Real Estate</h3>
                    </div>
                    <div className='idea-card'>
                        <img src={rec}></img>
                        <h3>E-commerce</h3>
                    </div>

                </div>
                <div className="caret-left" onClick={scrllb}>
                        &raquo;
                    </div>
                    <div className="caret-right" onClick={scrll}>
                        &raquo;
                </div>
            </div>

        </div>
    );

}

export default Ideas;
