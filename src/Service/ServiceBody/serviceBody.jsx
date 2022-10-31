import React from 'react';
import style from './serviceBody.css';


import Footer from '../../Layout/Footer/footer';

function serviceBody () {
    
        return (
            <div className='ServiceBody'>
                <div className="sbody-1">
                    <h1>Our Services</h1>
                    <p>With our awesome team, we offer a variety of services from UI/UX design to business branding. Our
                        goal is to help you on your road to create your product
                    </p>
                    <div>
                        <button>
                            Let's Talk <img src="" alt="" />
                        </button>
                        <span><h5>Check our Projects</h5> &#arrow;</span>
                    </div>
                </div>
                <div className="sbody-2">
                    <div>
                        <h4>ICT Training Center</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error mollitia nemo accusantium deleniti quos natus maiores ipsam!
                        </p>
                    </div>
                    <img src="" alt="" />
                </div>
                <div className="sbody-3">
                    <h2>Learn, Connect and Discuss</h2>
                    <iframe src="" frameborder="0"></iframe>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, possimus.</p>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="sbody-4">
                        <h5>
                            Testimonial
                        </h5>
                        <h2>
                            You still hesitate about working with us?
                            Check what they say about us
                        </h2>
                        <div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, reiciendis blanditiis!

                                </p>
                                <div>
                                    <img src="" alt="" />
                                    <div>
                                        <h5>name</h5>
                                        <p>title</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               
            </div>
        );
    
}

export default serviceBody;
