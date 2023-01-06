import React from 'react';



//Style
import style from './dashboard.css';



//Images
import profilepic from '../Homepage/Testimonials/assets/profile.png';


import { useCookies } from 'react-cookie';


function Dashboard() {

    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const isAuthenticated = (cookies.isAuthenticated === 'true');





    return (
        <div className='dashboard'>
            <div className='profile'>
                {/* <button onClick={logoutUser}>log out</button> */}
                <img src={profilepic}></img>
               
                <div>
                    <h1>
                    {cookies.FirstName.charAt(0).toUpperCase()+ cookies.FirstName.slice(1)} {cookies.LastName.charAt(0).toUpperCase()+ cookies.LastName.slice(1)}
                        </h1>
                    <i>{isAuthenticated? "real" : "fake"}</i>
                    <br/> <br/>
                    <h4>TD-TCH412ar67WBC</h4>
                </div>
            </div> <br /> <br />
            <div className='dash-main'>
                <div className='reg-course'>
                    <h3>Profile Details</h3> <br /> <br />
                    <p><b>First Name:</b> {cookies.FirstName}</p> <br />
                    <p><b>Last Name:</b> Morgan</p> <br />
                    <p><b>Email:</b> <i>clairem@gmail.com</i></p> <br />
                    <p><b>Address:</b> 50 Apara Link Road, Port Harcourt</p> <br />
                    <p><b>Registered:</b> 11th September 2022</p> <br />

                    <button>Make Changes</button>
                </div>
                <div className='reg-course'>
                    <h3>Registered Course</h3> <br /> <br />
                    <p><b>Course:</b> Web Development</p> <br />
                    <p><b>Student ID:</b> TD-TCH412ar67WBC</p> <br />
                    <p><b>Start Date:</b> 11th September 2022</p> <br />
                    <p><b>End Date:</b> 10th January 2023</p> <br />
                    <p><b>Current Week:</b> 5</p> <br />
                    <button>Enter Class</button>
                </div>
                <div className='reg-course'>
                    <h3>Registered Course</h3> <br /> <br />
                    <p>Web Development</p> <br />
                    <p><b>Student ID:</b> TD-TCH412ar67WBC</p> <br />
                    <p><b>Start Date:</b> 11th September 2022</p> <br />
                    <p><b>End Date:</b> 10th January 2023</p> <br />
                    <p><b>Current Week:</b> 5</p> <br />
                    <button>Enter Class</button>
                </div>
                <div className='reg-course'>
                    <h3>Registered Course</h3> <br /> <br />
                    <p>Web Development</p> <br />
                    <p><b>Student ID:</b> TD-TCH412ar67WBC</p> <br />
                    <p><b>Start Date:</b> 11th September 2022</p> <br />
                    <p><b>End Date:</b> 10th January 2023</p> <br />
                    <p><b>Current Week:</b> 5</p> <br />
                    <button>Enter Class</button>
                </div>
            </div>

        </div>
    );

}

export default Dashboard;
