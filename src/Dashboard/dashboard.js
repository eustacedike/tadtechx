import React from 'react';
import { Link } from 'react-router-dom';



//Style
import style from './dashboard.css';



//Images
import profilepic from '../Homepage/Testimonials/assets/profile.png';


import { useCookies } from 'react-cookie';


function Dashboard() {

    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const isAuthenticated = (cookies.isAuthenticated === 'true');


console.log(cookies);


    return (
        <div className='dashboard'>
            {/* <div className='profile'>
                <img src={profilepic}></img>
               
                <div>
                    <h1>
                    {cookies.FirstName.charAt(0).toUpperCase()+ cookies.FirstName.slice(1)} {cookies.LastName.charAt(0).toUpperCase()+ cookies.LastName.slice(1)}
                        </h1>
                    <i>{cookies.Email}</i>
                    <br/> <br/>
                    <h4>TD-TCH412ar67WBC</h4>
                </div>
            </div> <br /> <br /> */}
            <div className='dash-main'>
                <div className='reg-course'>
                    <h2>Profile Details</h2> <br /> <br />
                    <h3>{cookies.Role.charAt(0).toUpperCase()+ cookies.Role.slice(1)}</h3>
                    <p><b>First Name:</b> {cookies.FirstName.charAt(0).toUpperCase()+ cookies.FirstName.slice(1)}</p> <br />
                    <p><b>Last Name:</b> {cookies.LastName.charAt(0).toUpperCase()+ cookies.LastName.slice(1)}</p> <br />
                    <p><b>Email:</b> <i>{cookies.Email}</i></p> <br />
                    <p><b>Address:</b> 50 Apara Link Road, Port Harcourt</p> <br />
                    <p><b>Registered:</b> {cookies.JoinDate.slice(0,10)}</p> <br />
                    <div className='online'>
                        <div></div>
                        <p>online</p>
                    </div>

                    <button>Make Changes</button>
                </div>
                <div className='reg-course'>
                    <h2>Registered Course</h2> <br /> <br />
                    <p><b>Course:</b> Web Development</p> <br />
                    <p><b>Student ID:</b> TD-TCH412ar67WBC</p> <br />
                    <p><b>Start Date:</b> 11th September 2022</p> <br />
                    <p><b>End Date:</b> 10th January 2023</p> <br />
                    <p><b>Current Week:</b> 5</p> <br />
                    <Link to="/class/webdevelopment"><button>Enter Class</button></Link>
                </div>
             
            </div>

        </div>
    );

}

export default Dashboard;
