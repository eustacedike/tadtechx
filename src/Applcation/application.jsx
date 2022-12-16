import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import style from './application.css';

import courseData from "../CoursePage/coursedata/courseData.json";



function Application() {

    const linkStyle = {
        // textDecoration: 'none',
        color: '#2960ec',
    }

    const program = useRef();
    const [regular, setRegular] = useState(false);

    console.log(Object.keys(courseData))

    const Courss = Object.keys(courseData);

    const getProg = () => {
        console.log(program.current.value);
        if (program.current.value==="bootcamp") {
                setRegular(value => true);} else {
                    setRegular(value => false);
                }
        
    }
    
    // if (program.current.value==="bootcamp") {
    //     setRegular(value => true);}

    return (
        <div className='Application'>

            <div className='contact-us-form'>
                <form action="">

                    <div className="firstlast">
                        <div className="firstn">
                            <label htmlFor="firstname">First Name</label> <br />
                            <input type="text" />
                        </div>
                        <div className="lastn">
                            <label htmlFor="lastname">Last Name</label> <br />
                            <input type="text" />
                        </div>
                    </div>
                    <div className="email-add">
                        <label htmlFor="email">Email Address</label> <br />
                        <input type="email" />
                    </div>
                    {/* <div className="email-add">
                        <label htmlFor="password" >Password</label> <br />
                        <input type="password" />
                    </div> */}
                    <div className="email-add">
                        <label htmlFor="" >Programme</label> <br />
                        <select onChange={getProg} ref={program}>
                            <option value="bootcamp">1-Month Bootcamp</option>
                            <option value="regular" selected>3-Month Regular Course</option>
                            <option value="scholarship">Scholarship</option>
                        </select>
                    </div>
                    <div className="email-add" style={{display: regular? "block": "none"}}>
                        <label htmlFor="" >Batch</label> <br />
                        <select>
                            <option value="">22 Dec - 22 Jan 2022 </option>
                        </select>
                    </div>
                    <div className="email-add">
                        <label htmlFor="" >Course</label> <br />

                        <select name="" id="">
                            {Courss.map(eachCourse => {
                                return (

                                    <option value="">{courseData[eachCourse].name}</option>

                                )
                            })}
                        </select>



                    </div>

                    <br /> <br />
                    <div className="snd-btn">
                        <button>Submit</button>
                    </div>

                </form>
            </div>


        </div>
    );

}

export default Application;
