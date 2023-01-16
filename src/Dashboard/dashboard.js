import React from 'react';
import { Link } from 'react-router-dom';



//Style
import style from './dashboard.css';



//Images
import profilepic from '../Homepage/Testimonials/assets/profile.png';


import { useCookies } from 'react-cookie';

const classDetails = {
    dept: "Web Development",
    link: "webdevelopment",
    studentID: "TD-TCH412ar67WBC"
}


function Dashboard() {

    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const isAuthenticated = (cookies.isAuthenticated === 'true');



const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sep","Oct","Nov","Dec"]
let dateFormat =
months[parseInt(cookies.JoinDate.slice(5,7))-1]
+ " "
+ cookies.JoinDate.slice(8,10)
+ ", " 
+cookies.JoinDate.slice(0,4);

// console.log(dateFormat);



    return (
        <div className='dashboard'>
          
            <div className='dash-main'>
                <div className='reg-course'>
                    <h2>Profile Details</h2> <br /> <br />
                    <h3>{cookies.Role.charAt(0).toUpperCase()+ cookies.Role.slice(1)}</h3>
                    <p><b>First Name:</b> {cookies.FirstName.charAt(0).toUpperCase()+ cookies.FirstName.slice(1)}</p> <br />
                    <p><b>Last Name:</b> {cookies.LastName.charAt(0).toUpperCase()+ cookies.LastName.slice(1)}</p> <br />
                    <p><b>Email:</b> <i>{cookies.Email}</i></p> <br />
                    {/* <p><b>Address:</b> 50 Apara Link Road, Port Harcourt</p> <br /> */}
                    <p><b>Registered:</b> {dateFormat}</p> <br />
                    <div className='online'>
                        <div></div>
                        <p>online</p>
                    </div>

                    <button>Make Changes</button>
                </div>
                <div className='reg-course'>
                    <h2>Registered Course</h2> <br /> <br />
                    <p><b>Course:</b> {classDetails.dept}</p> <br />
                    <p><b>Student ID:</b> {classDetails.studentID}</p> <br />
                    <p><b>Start Date:</b> 11th September 2022</p> <br />
                    <p><b>End Date:</b> 10th January 2023</p> <br />
                    <p><b>Current Week:</b> 5</p> <br />
                    <Link to={`/class/${classDetails.link}`}><button>Enter Class</button></Link>
                </div>
             
            </div>

        </div>
    );

}

export default Dashboard;
