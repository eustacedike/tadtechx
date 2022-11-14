//React
import React from 'react';
import { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";

//Style
import style from './courses.css';

//Images
import artificial from '../../CoursePage/coursedata/images/artificial.png';
import andr from '../../CoursePage/coursedata/images/androidcourse.png';
import cyber from '../../CoursePage/coursedata/images/cyber.png';
import dbase from '../../CoursePage/coursedata/images/database.png';
import diploma from '../../CoursePage/coursedata/images/diploma.png';
import gdesign from '../../CoursePage/coursedata/images/gdesign.png';
import ehack from '../../CoursePage/coursedata/images/hacking.png';
import machinee from '../../CoursePage/coursedata/images/machine.png';
import softw from '../../CoursePage/coursedata/images/software.png';
import webdev from '../../CoursePage/coursedata/images/webdev.png';

//Icons
import arrow from './assets/vector-right.png';



function Courses(props) {


    const offeredCourses = [
        {id: 1, title: "Artificial Intelligence Course", preview: artificial, rating: 4.5},
        {id: 2, title: "Ethical Hacking Course", preview: ehack, rating: 4.5},
        {id: 3, title: "Computer Diploma Course", preview: diploma, rating: 4.5},
        {id: 4, title: "Web App Development Course", preview: webdev, rating: 4.5},
        {id: 5, title: "Software Engineering Course", preview: softw, rating: 4.5},
        {id: 6, title: "Android/IOS Development Course", preview: andr, rating: 4.5},
        {id: 7, title: "Cyber Security Course", preview: cyber, rating: 4.5},
        {id: 8, title: "Graphics Design UI/UX Course", preview: gdesign, rating: 4.5},
        {id: 9, title: "CMS/BMS/Database MS Course", preview: dbase, rating: 4.5},
        {id: 10, title: "Machine Learning Course", preview: machinee, rating: 4.5},
       
        
      ];
    
    const carrd = useRef();

    const scrll = () => {
        carrd.current.scrollBy(240,0);
    };

    const scrllbck = () => {
        carrd.current.scrollBy(-240,0);
    };
    

    var zts = -3;



    useEffect(() => {    
    const autScrll = () => {

        if (carrd.current.scrollWidth - carrd.current.scrollLeft <= carrd.current.clientWidth * 1.25) {
            carrd.current.scroll(0,0);
            zts = -3;
        // indicate.current.style.marginLeft = `${zts}px`;

        } else {
            carrd.current.scrollBy(200,0);

            zts+=17.2;
        // indicate.current.style.marginLeft = `${zts}px`;
        }
            
        
    };

    setInterval (autScrll, 3000);

}, []);

  
    
      return (
        <div className='Courses'>

            <h2 className={props.headStyle}>{props.theHead}</h2>
            
            <div className="course-cards" ref={carrd}>
                {offeredCourses.map(eachCourse => {
                    return (
                        <div key={eachCourse.id} className="course-card">
                            <div>
                            <img className='course-img' src={eachCourse.preview} alt={eachCourse.title}></img>
                            </div>
                            <span><h4>{eachCourse.title}</h4><button className='rating'>&#9733; {eachCourse.rating}</button></span>
                            <button className='more'>Learn More <img src={arrow} alt="" /></button>
                        </div>
                    )
                })}

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
  