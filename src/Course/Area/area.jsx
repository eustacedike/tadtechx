

import React from 'react';
import { Link } from 'react-router-dom';
import style from './area.css';
import artificial from './assets/artificial.png';
import arrow from './assets/vector-right.png';



function Area() {

    const offeredCourses = [
        {id: 1, title: "Artificial Intelligence Course", preview: artificial, rating: 4.5, link: "cybersecurity"},
        {id: 2, title: "Ethical Hacking Course", preview: artificial, rating: 4.5, link: "webdevelopment"},
        {id: 3, title: "Computer Diploma Course", preview: artificial, rating: 4.5, link: "cybersecurity"},
        {id: 4, title: "Web App Development Course", preview: artificial, rating: 4.5, link: "cybersecurity"},
        {id: 5, title: "Software Engineering Course", preview: artificial, rating: 4.5, link: "cybersecurity"},
        {id: 6, title: "Android/IOS Development Course", preview: artificial, rating: 4.5, link: "cybersecurity"},
        {id: 7, title: "Cyber Security Course", preview: artificial, rating: 4.5, link: "cybersecurity"},
        {id: 8, title: "Graphics Design UI/UX Course", preview: artificial, rating: 4.5, link: "cybersecurity"},
        {id: 9, title: "CMS/BMS/Database MS Course", preview: artificial, rating: 4.5, link: "cybersecurity"},
        {id: 10, title: "Machine Learning Course", preview: artificial, rating: 4.5, link: "cybersecurity"},
       ];

    return (
        <div className='Area'>

           <h2>Explore Our Courses</h2>

           

            <div className="main-course">

                {offeredCourses.map(eachCourse => {
                    return (
                        <div key={eachCourse.id} className="course-card">
                            <img className='course-img' src={eachCourse.preview} alt={eachCourse.title}></img>
                            <span><h4>{eachCourse.title}</h4><button className='rating'>&#9733; {eachCourse.rating}</button></span>
                            <Link style={{ textDecoration: 'none' }} to={`/courses/${eachCourse.link}`}><button className='more'>Learn More <img src={arrow} alt="" /></button></Link>
                        </div>
                    )
                })}

                
            </div>
        </div>
    );

}

export default Area;