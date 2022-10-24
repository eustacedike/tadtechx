

import React from 'react';
import { Link } from 'react-router-dom';
import style from './area.css';
import artificial from './assets/artificial.png';
import arrow from './assets/vector-right.png';



function Area() {

    return (
        <div className='Area'>

           <h2>Explore Our Courses</h2>

            <div className="main-course">
                <div className='course-card'>
                    <img className='course-img' src={artificial} alt=""></img>
                    <span><h4>Artificial Intelligence Course</h4><button className='rating'>&#9733; 4.5</button></span>
                    <Link to="/cybersecurity"><button className='more'>Learn More <img src={arrow} alt="" /></button></Link>
                </div>
                <div className='course-card'>
                    <img className='course-img' src={artificial} alt=""></img>
                    <span><h4>Artificial Intelligence Course</h4><button className='rating'>&#9733; 4.5</button></span>
                    <button className='more'>Learn More <img src={arrow} alt="" /></button>
                </div>
                <div className='course-card'>
                    <img className='course-img' src={artificial} alt=""></img>
                    <span><h4>Artificial Intelligence Course</h4><button className='rating'>&#9733; 4.5</button></span>
                    <button className='more'>Learn More <img src={arrow} alt="" /></button>
                </div>
                <div className='course-card'>
                    <img className='course-img' src={artificial} alt=""></img>
                    <span><h4>Artificial Intelligence Course</h4><button className='rating'>&#9733; 4.5</button></span>
                    <button className='more'>Learn More <img src={arrow} alt="" /></button>
                </div>
                <div className='course-card'>
                    <img className='course-img' src={artificial} alt=""></img>
                    <span><h4>Artificial Intelligence Course</h4><button className='rating'>&#9733; 4.5</button></span>
                    <button className='more'>Learn More <img src={arrow} alt="" /></button>
                </div>
                <div className='course-card'>
                    <img className='course-img' src={artificial} alt=""></img>
                    <span><h4>Artificial Intelligence Course</h4><button className='rating'>&#9733; 4.5</button></span>
                    <button className='more'>Learn More <img src={arrow} alt="" /></button>
                </div>
                <div className='course-card'>
                    <img className='course-img' src={artificial} alt=""></img>
                    <span><h4>Artificial Intelligence Course</h4><button className='rating'>&#9733; 4.5</button></span>
                    <button className='more'>Learn More <img src={arrow} alt="" /></button>
                </div>
                <div className='course-card'>
                    <img className='course-img' src={artificial} alt=""></img>
                    <span><h4>Artificial Intelligence Course</h4><button className='rating'>&#9733; 4.5</button></span>
                    <button className='more'>Learn More <img src={arrow} alt="" /></button>
                </div>
                <div className='course-card'>
                    <img className='course-img' src={artificial} alt=""></img>
                    <span><h4>Artificial Intelligence Course</h4><button className='rating'>&#9733; 4.5</button></span>
                    <button className='more'>Learn More <img src={arrow} alt="" /></button>
                </div>
            </div>
        </div>
    );

}

export default Area;