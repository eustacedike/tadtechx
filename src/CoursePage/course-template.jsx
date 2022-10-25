import React from 'react';
import style from './course-template.css';

import neww from './assets/new.png';

import cert from './assets/Certificate.png';
import clock from './assets/Clock.png';
import beginner from './assets/Beginner.png';

import Enroll from '../Layout/Enroll/enroll';
import Courses from '../Homepage/Courses/courses';


function CourseTemplate (props) {

    return (
        <div className='CyberSec' key={props.currCourse.id}>
            <div className="cyber-1">
            <div className="segment-1">
                <h1>Introduction to {props.currCourse.name}</h1>

                <div className="introduction">
                    <div className="frame">
                        <img src={props.curxPreview}></img>
                    </div>
                    <p>{props.currCourse.intro}
                    </p>
                </div>

                <div className="course-details">
                    <div className='tails'>
                        <img src={clock} alt="" />
                        <div>
                            <h5>{props.currCourse.duration} weeks</h5>
                            <h5 style={{fontWeight: 400}}>3 - 6 hours per week</h5>
                        </div>
                    </div>
                    <div className='tails'>
                        <img src={beginner} alt="" />
                        <h5>Beginner level</h5>
                    </div>
                    <div className='tails'>
                        <img src={cert} alt="" />
                        <h5>Digital certificate</h5>
                    </div>

                </div>

                <div className="segment-2">
                    <div className="about-course">
                        <h3>About this Course</h3>
                        <p>sed odio lacus tempor elit lobortis, cursus tincidunt ullamcorper dui leo. quis viverra laoreet eget placerat scelerisque eget vitae porta massa psum quam vel Utfrtyuf jhfyhioooippk hgoootvg

                            orem. scelerisque non. non. ex varius Nullam amet, enim. non. in id amet, ipsum elit vitae ac

                        </p>
                        <p>sed odio lacus tempor elit lobortis, cursus tincidunt ullamcorper dui leo. quis viverra laoreet eget placerat scelerisque eget vitae porta massa psum quam vel Utfrtyuf jhfyhioooippk hgoootvg

                            orem. scelerisque non. non. ex varius Nullam amet, enim. non. in id amet, ipsum elit vitae ac

                        </p>
                        <p>sed odio lacus tempor elit lobortis, cursus tincidunt ullamcorper dui leo. quis viverra laoreet eget placerat scelerisque eget vitae porta massa psum quam vel Utfrtyuf jhfyhioooippk hgoootvg

                            orem. scelerisque non. non. ex varius Nullam amet, enim. non. in id amet, ipsum elit vitae ac

                        </p>

                        <div>
                            <h5>{props.currCourse.students} already enrolled on this course</h5>
                            <div className='soon'>
                                <h4>Starts Soon</h4>
                                <button>Join Course</button>
                            </div>
                        </div>
                    </div>
                    <div className="news-cat">
                    <h4>News categories</h4>
                    <div className="news">
                        
                        <div className='news-1'>
                            <img src={neww} alt="" />
                            <div>
                                <span>
                                    <button>John Smash</button>
                                    .5min
                                </span>
                                <h4>Lorem ipsum is simply dummy</h4>
                            </div>
                        </div>
                        <div className='news-1'>
                            <img src={neww} alt="" />
                            <div>
                                <span>
                                    <button>John Smash</button>
                                    .5min
                                </span>
                                <h5>Lorem ipsum is simply dummy</h5>
                            </div>
                        </div>
                        <div className='news-1'>
                            <img src={neww} alt="" />
                            <div>
                                <span>
                                    <button>John Smash</button>
                                    .5min
                                </span>
                                <h5>Lorem ipsum is simply dummy</h5>
                            </div>
                        </div>
                        <div className='news-1'>
                            <img src={neww} alt="" />
                            <div>
                                <span>
                                    <button>John Smash</button>
                                    .5min
                                </span>
                                <h5>Lorem ipsum is simply dummy</h5>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="segment-3">
                    <h3>Syllabus</h3>
                    <table className='syllabus'>
                        <tr>
                            <td>Week 1</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Color Contrast</td>
                            <td>Colors should pass the WCAG 2.1 Level AA (4.5:1)</td>
                        </tr>
                        <tr>
                            <td>Week 2</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Color Contrast</td>
                            <td>Colors should pass the WCAG 2.1 Level AA (4.5:1)</td>
                        </tr>
                        <tr>
                            <td>Week 3</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Color Contrast</td>
                            <td>Colors should pass the WCAG 2.1 Level AA (4.5:1)</td>
                        </tr>
                        <tr>
                            <td>Week 4</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Color Contrast</td>
                            <td>Colors should pass the WCAG 2.1 Level AA (4.5:1)</td>
                        </tr>
                        <tr>
                            <td>Week 5</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Color Contrast</td>
                            <td>Colors should pass the WCAG 2.1 Level AA (4.5:1)</td>
                        </tr>
                        <tr>
                            <td>Week 6</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Color Contrast</td>
                            <td>Colors should pass the WCAG 2.1 Level AA (4.5:1)</td>
                        </tr>
                    </table>

                    <h3>Explore new skills</h3>
                    <p>Equip yourself with the essential skills, confidence and competence to assist you in your chosen industry.</p>

                    <h3>Who is this course for?</h3>
                    <p>This course is suitable for all skill levels and backgrounds. Whether you want to advance your career prospects, learn a new skill, or broaden your educational horizons this course will help you to gain a solid understanding of the core competencies required to drive a successful career in your chosen industry.</p>

                    <h3>More courses you might like</h3>
                    <div className="extra-courses">
                        <Courses/>
                    </div>
                </div>

            </div>
            </div>
            <div className="cyber-2">
                <h3>Reviews</h3>
                <div className="reviews">
                    <div>
                        <div>
                            <img src="" alt="" />
                            <div>
                                <h5>Екатерина Лужецкая</h5>
                                <p>месяц назад</p>
                                <p>Пишу отзыв спустя 4 месяца после сдачи проекта. В течении этого времени были незначительные ошибки, но ребята сразу их исправляли. В целом все работает стабильно. Сотрудничаем дальше.</p>
                            </div>
                        </div>
                        <p></p>
                    </div>
                </div>
            </div>

            <Enroll/>
        </div>
    );

}

export default CourseTemplate;
