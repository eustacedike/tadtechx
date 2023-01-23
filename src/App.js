
// React
import ReactDOM from "react-dom/client";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";

import axios from "axios";

import { CookiesProvider } from "react-cookie";

// Style
import './App.css';


// Pages
import Layout from "./Layout/layout";
import Homepage from './Homepage/homepage';
import Course from './Course/course.jsx';
import CourseTemplate from './CoursePage/course-template';
import Service from "./Service/service";
import About from "./About/about";
import Contact from "./Contact/contact";
import Application from "./Applcation/application";
import ClassApp from "./ClassApp/classapp";
import Dashboard from "./Dashboard/dashboard";

import SignIn from "./SignIN/signIn";
import SignUp from "./SignUP/signUp";

// Course Data
import courseData from "./CoursePage/coursedata/courseData.json";

// Course Images
import cyberImg from "./CoursePage/coursedata/images/cyber.png";
import webImg from "./CoursePage/coursedata/images/webdev.png";

import artificial from './CoursePage/coursedata/images/artificial.png';
import andr from './CoursePage/coursedata/images/androidcourse.png';
// import cyber from './CoursePage/coursedata/images/cyber.png';
import dbase from './CoursePage/coursedata/images/database.png';
import diploma from './CoursePage/coursedata/images/diploma.png';
import gdesign from './CoursePage/coursedata/images/gdesign.png';
import ehack from './CoursePage/coursedata/images/hacking.png';
import machinee from './CoursePage/coursedata/images/machine.png';
import softw from './CoursePage/coursedata/images/software.png';

// import webdev from './CoursePage/coursedata/images/webdev.png';


//Private Route
import PrivateRoute from "./Private-Route/PrivateRoute";



function App() {

  const [instructorMessages, setInstructorMessages] = useState([]);

   
    const getMessages = () => {
        axios.get("api/messages/fetchmessages")
            .then((response) => {
              // console.log(response.data)
                setInstructorMessages(response.data);
            });

    };


    useEffect(() => {
        getMessages();
    }, [instructorMessages]);


  
  return (
  <CookiesProvider>
    <div className="App">

      
      <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="courses" element={<Course />}/>
          <Route path="/courses/cybersecurity" element={<CourseTemplate currCourse={courseData.cyberSec} curxPreview={cyberImg}/>}/>
          <Route path="/courses/webdevelopment" element={<CourseTemplate currCourse={courseData.webDev} curxPreview={webImg}/>}/>
          <Route path="/courses/artificialintelligence" element={<CourseTemplate currCourse={courseData.ai} curxPreview={artificial}/>}/>
          <Route path="/courses/ethicalhacking" element={<CourseTemplate currCourse={courseData.ehack} curxPreview={ehack}/>}/>
          <Route path="/courses/computerdiploma" element={<CourseTemplate currCourse={courseData.diploma} curxPreview={diploma}/>}/>
          <Route path="/courses/softwareengineering" element={<CourseTemplate currCourse={courseData.software} curxPreview={softw}/>}/>
          <Route path="/courses/androidiosdevelopment" element={<CourseTemplate currCourse={courseData.androidios} curxPreview={andr}/>}/>
          <Route path="/courses/graphicsdesign" element={<CourseTemplate currCourse={courseData.gdesign} curxPreview={gdesign}/>}/>
          <Route path="/courses/databasecourse" element={<CourseTemplate currCourse={courseData.dbase} curxPreview={dbase}/>}/>
          <Route path="/courses/machinelearning" element={<CourseTemplate currCourse={courseData.machine} curxPreview={machinee}/>}/>
          
          <Route path="services" element={<Service />}/>
          <Route path="aboutus" element={<About />}/>
          <Route path="contactus" element={<Contact />}/>
          <Route path="application" element={<Application />}/>

          <Route path="dashboard" element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                    />
          
          
          <Route path="class" element={<ClassApp thisClass={courseData.webDev}  />}/>
          <Route path="class/webdevelopment" element={
          <PrivateRoute>
          <ClassApp thisClass={courseData.webDev} pLanguage="https://replit.com/@EustaceDike/myHTML?embed=true"/>
          </PrivateRoute>
          }/>
          <Route path="class/artificialintelligence" element={<ClassApp thisClass={courseData.ai} pLanguage="https://replit.com/@EustaceDike/myPython?embed=true"/>}/>
          <Route path="class/ethicalhacking" element={<ClassApp thisClass={courseData.ehack} />}/>
          <Route path="class/androidiosdevelopment" element={<ClassApp thisClass={courseData.androidios} />}/>
          <Route path="class/graphicsdesign" element={<ClassApp thisClass={courseData.gdesign} />}/>


          {
                    instructorMessages.map(imessage => {

         

                        return (<Route
                        path={`/class/webdevelopment/${imessage.message.split(' ').join('-').toLowerCase()}`}
                        element={<About />}
                        >
                            
                        </Route>
                        )
                    })
                }


          <Route path="signin" element={<SignIn />}/>
          <Route path="signup" element={<SignUp />}/>

        </Route>
      </Routes>
    </HashRouter>
   

    {/* <Service/> */}

    </div>
    </CookiesProvider>
  );
}

export default App;
