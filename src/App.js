
// React
import ReactDOM from "react-dom/client";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";


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





function App() {
  return (
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

          <Route path="signin" element={<SignIn />}/>
          <Route path="signup" element={<SignUp />}/>

        </Route>
      </Routes>
    </HashRouter>

    {/* <Service/> */}

    </div>
  );
}

export default App;
