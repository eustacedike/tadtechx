import React from 'react';
import style from './trial.css';
// import artificial from './assets/artificial.png';
import arrow from './assets/vector-right.png';
import blog1 from './assets/blog1.png'
import { useRef } from 'react';
import { Link } from "react-router-dom";


function Trial() {


    // const attestation = [
    //     { id: 1, name: "Sammy Lawson", avatar: profile, comment: "White dwarf a still more glorious dawn awaits tingling of the spine emerged into consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds kindling the energy hidden in matter concept of the number one permanence." },
    //     { id: 2, name: "Azah Anyeni", avatar: profile, comment: "Green dwarf a still more glorious dawn awaits tingling of the spine emerged into consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds kindling the energy hidden in matter concept of the number one permanence." },
    //     { id: 3, name: "Chris Prince", avatar: profile, comment: "White dwarf a still more glorious dawn awaits tingling of the spine emerged into consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds kindling the energy hidden in matter concept of the number one permanence." },
    //     { id: 4, name: "David Charles", avatar: profile, comment: "White dwarf a still more glorious dawn awaits tingling of the spine emerged into consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds kindling the energy hidden in matter concept of the number one permanence." },
    //     { id: 5, name: "Sandra Peters", avatar: profile, comment: "White dwarf a still more glorious dawn awaits tingling of the spine emerged into consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds kindling the energy hidden in matter concept of the number one permanence." },

    // ];

    const syllabus = [
        {week: 1, lesson: "Color Contrast", task: "Colors should pass the WCAG 2.1 Level AA (4.5:1)"},
        {week: 2, lesson: "Color Contrast", task: "Colors should pass the WCAG 2.1 Level AA (4.5:1)"},
        {week: 3, lesson: "Color Contrast", task: "Colors should pass the WCAG 2.1 Level AA (4.5:1)"},
        {week: 4, lesson: "Color Contrast", task: "Colors should pass the WCAG 2.1 Level AA (4.5:1)"},
        {week: 5, lesson: "Color Contrast", task: "Colors should pass the WCAG 2.1 Level AA (4.5:1)"},
        {week: 6, lesson: "Color Contrast", task: "Colors should pass the WCAG 2.1 Level AA (4.5:1)"},
    ]


    const carrd = useRef();

    const scrll = () => {
        carrd.current.scrollBy(240, 0);
    };

    const scrllbck = () => {
        carrd.current.scrollBy(-240, 0);
    };


    return (
        <div>

            <div className="testimonial-cards" ref={carrd}>


                {syllabus.map(eachWeek => {
                        return (
                            <>
                            <tr>
                                <td>Week {eachWeek.week}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>{eachWeek.lesson}</td>
                                <td>{eachWeek.task}</td>
                            </tr>
                            </>
                        )
                    })}

                {attestation.map(testimony => {
                    return (
                        <div key={testimony.id} className="testimonial-card">
                            <div className="inner-test">
                                <div className="details">
                                    <img src={testimony.avatar}></img>
                                    <h4>{testimony.name}</h4>
                                </div>
                                <div className="content">
                                    <p>{testimony.comment}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}


                {/* <div className='card'>
                    <img src={blog1} alt=""></img>
                    <h4>ICT Training Centre</h4>
                    <p>Progressively incentivize coperative systems through technically sound functionalities</p>
                </div> */}
            </div>

            {/* <h2>Explore Our Courses</h2> */}

            {/* <div className="course-cards" ref={carrd}>
                {exCourse.map(eachCourse => {
                    return (
                        <div key={eachCourse.id} className="course-card">
                            <img className='course-img' src={eachCourse.preview} alt={eachCourse.title}></img>
                            <span><h4>{eachCourse.title}</h4><button className='rating'>&#9733; {eachCourse.rating}</button></span>
                            <button className='more'>Learn More <img src={arrow} alt="" /></button>
                        </div>
                    )
                })}

            </div> */}


            <div className="arrow-b">
                <img onClick={scrllbck} src={arrow} alt="" />
            </div>

            <div className="arrow">
                <img onClick={scrll} src={arrow} alt="" />
            </div>

            <div className="all">
                {/* <Link to="/courses"><button>View all courses</button></Link> */}
            </div>

        </div>
    );

}

export default Trial;
