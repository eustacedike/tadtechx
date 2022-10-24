import React from 'react';
import style from './learn.css';
import { useRef } from 'react';
import preview from './assets/preview.png';


function Learn () {

    const discc = useRef();

    const scrll = () => {

        console.log(discc.current.scrollLeft);

        if (discc.current.scrollLeft > discc.current.offsetWidth * 3) {
            discc.current.scroll(0,0);
        } else {
            discc.current.scrollBy(240,0);
        }
            console.log(discc.current.offsetWidth);
        
    };

    setInterval (scrll, 5000);

    // if (discc.current.scrollLeft > 460) {
    //     discc.current.style.color = "red";
    //   }

    const scrllb = () => {
        discc.current.scrollBy(-240,0);
    };

    return (
        <div className='Learn'>

            <div className="box-1">
            <div className='caption'>
                <h1>Learn, <span className='tech'>Connect</span><br></br> and Discuss</h1>
            </div>
            <div className="discuss" ref={discc}>
                <div className="discuss-1">
                    <p>White dwarf a still more glorious dawn awaits tingling of the spine emerged into consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds</p>
                </div>
                <div className="discuss-1">
                    <p>Red dwarf a still more glorious dawn awaits tingling of the spine emerged into consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds</p>
                </div>
                <div className="discuss-1">
                    <p>Green dwarf a still more glorious dawn awaits tingling of the spine emerged into consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds</p>
                </div>
            </div>

            <div className='d1'></div>
            <div className='d2'></div>
            <div className='d3'></div>
            <div className='d4'></div>
            </div>
            <div className="box-2">
                <div className='preview'>
                     <img src={preview}></img>
                </div>
               
                <div className='other'>
                    <h2>Our Scholarship Program</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, modi tempora. Voluptas assumenda officia quisquam. Quidem, similique magni culpa dolores consequatur cumque cupiditate ratione quibusdam eos quo.</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iure, consectetur sunt repudiandae voluptatum quasi architecto sit aliquam magni inventore! Molestias quia incidunt deleniti.</p>
                    <button>Apply here</button>
                </div>
            </div>
        </div>
    );

}

export default Learn;
