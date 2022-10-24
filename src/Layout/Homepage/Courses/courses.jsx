import React from 'react';
import style from './courses.css';
import artificial from './assets/artificial.png';
import arrow from './assets/vector-right.png';
import { useRef } from 'react';
import { Link } from "react-router-dom";


function Courses() {
    
    const carrd = useRef();

    const scrll = () => {
        carrd.current.scrollBy(240,0);
    };

    const scrllbck = () => {
        carrd.current.scrollBy(-240,0);
    };
    

  
    
      return (
        <div className='Courses'>

            <h2>Explore Our Courses</h2>
            
            <div className="course-cards" ref={carrd}>
                <div className='course-card'>
                    <img className='course-img' src={artificial} alt=""></img>
                    <span><h4>Artificial Intelligence Course</h4><button className='rating'>&#9733; 4.5</button></span>
                    <button className='more'>Learn More <img src={arrow} alt="" /></button>
                </div>
                <div className='course-card'>
                    <img className='course-img' src={artificial} alt=""></img>
                    <span><h4>Ethical Hacking Course</h4><button className='rating'>&#9733; 4.5</button></span>
                    <button className='more'>Learn More <img src={arrow} alt="" /></button>
                </div>
                <div className='course-card'>
                    <img className='course-img' src={artificial} alt=""></img>
                    <span><h4>Computer Diploma Course</h4><button className='rating'>&#9733; 4.5</button></span>
                    <button className='more'>Learn More <img src={arrow} alt="" /></button>
                </div>
                <div className='course-card'>
                    <img className='course-img' src={artificial} alt=""></img>
                    <span><h4>Web App Development Course</h4><button className='rating'>&#9733; 4.5</button></span>
                    <button className='more'>Learn More <img src={arrow} alt="" /></button>
                </div>
                <div className='course-card'>
                    <img className='course-img' src={artificial} alt=""></img>
                    <span><h4>Software Engineering Course</h4><button className='rating'>&#9733; 4.5</button></span>
                    <button className='more'>Learn More <img src={arrow} alt="" /></button>
                </div>
                <div className='course-card'>
                    <img className='course-img' src={artificial} alt=""></img>
                    <span><h4>Android/IOS Development Course</h4><button className='rating'>&#9733; 4.5</button></span>
                    <button className='more'>Learn More <img src={arrow} alt="" /></button>
                </div>
                <div className='course-card'>
                    <img className='course-img' src={artificial} alt=""></img>
                    <span><h4>Cyber Security Course</h4><button className='rating'>&#9733; 4.5</button></span>
                    <button className='more'>Learn More <img src={arrow} alt="" /></button>
                </div>
                <div className='course-card'>
                    <img className='course-img' src={artificial} alt=""></img>
                    <span><h4>Graphics Design UI/UX Course</h4><button className='rating'>&#9733; 4.5</button></span>
                    <button className='more'>Learn More <img src={arrow} alt="" /></button>
                </div>
                <div className='course-card'>
                    <img className='course-img' src={artificial} alt=""></img>
                    <span><h4>CMS/BMS/Database MS Course</h4><button className='rating'>&#9733; 4.5</button></span>
                    <button className='more'>Learn More <img src={arrow} alt="" /></button>
                </div>
                <div className='course-card'>
                    <img className='course-img' src={artificial} alt=""></img>
                    <span><h4>Machine Learning Course</h4><button className='rating'>&#9733; 4.5</button></span>
                    <button className='more'>Learn More <img src={arrow} alt="" /></button>
                </div>
                
                
            </div>
            
           
            <div className="arrow-b">
                <img onClick={scrllbck} src={arrow} alt="" />
            </div>

            <div className="arrow">
                <img onClick={scrll} src={arrow} alt="" />
            </div>

            <div className="all">
             <Link to="/courses"><button>View all courses</button></Link>
            </div>
            
        </div>
      );
    
}
  
  export default Courses;
  