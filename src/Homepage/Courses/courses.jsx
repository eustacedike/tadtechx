import React from 'react';
import style from './courses.css';
import artificial from './assets/artificial.png';
import arrow from './assets/vector-right.png';
import { useRef } from 'react';
import { Link } from "react-router-dom";


function Courses(props) {


    const offeredCourses = [
        {id: 1, title: "Artificial Intelligence Course", preview: artificial, rating: 4.5},
        {id: 2, title: "Ethical Hacking Course", preview: artificial, rating: 4.5},
        {id: 3, title: "Computer Diploma Course", preview: artificial, rating: 4.5},
        {id: 4, title: "Web App Development Course", preview: artificial, rating: 4.5},
        {id: 5, title: "Software Engineering Course", preview: artificial, rating: 4.5},
        {id: 6, title: "Android/IOS Development Course", preview: artificial, rating: 4.5},
        {id: 7, title: "Cyber Security Course", preview: artificial, rating: 4.5},
        {id: 8, title: "Graphics Design UI/UX Course", preview: artificial, rating: 4.5},
        {id: 9, title: "CMS/BMS/Database MS Course", preview: artificial, rating: 4.5},
        {id: 10, title: "Machine Learning Course", preview: artificial, rating: 4.5},
       
        
      ];
    
    const carrd = useRef();

    const scrll = () => {
        carrd.current.scrollBy(240,0);
    };

    const scrllbck = () => {
        carrd.current.scrollBy(-240,0);
    };
    

  
    
      return (
        <div className='Courses'>

            <h2 className={props.headStyle}>{props.theHead}</h2>
            
            <div className="course-cards" ref={carrd}>
                {offeredCourses.map(eachCourse => {
                    return (
                        <div key={eachCourse.id} className="course-card">
                            <img className='course-img' src={eachCourse.preview} alt={eachCourse.title}></img>
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
  