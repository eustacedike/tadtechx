
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

import SignIn from "./SignIN/signIn";
import SignUp from "./SignUP/signUp";

// Course Data
import courseData from "./CoursePage/coursedata/courseData.json";

// Course Images
import cyberImg from "./CoursePage/coursedata/images/cyber.png";
import webImg from "./CoursePage/coursedata/images/webdev.png";





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
          
          <Route path="services" element={<Service />}/>
          <Route path="aboutus" element={<About />}/>
          <Route path="contactus" element={<Contact />}/>

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
