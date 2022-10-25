import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Layout from "./Layout/layout";
import Homepage from './Homepage/homepage';
import Course from './Course/course.jsx';

import CourseTemplate from './CoursePage/course-template';

// Course Data
import cyberData from "./CoursePage/coursedata/cyberSec.json";
import webData from "./CoursePage/coursedata/webDev.json";

// Course Images
import cyberImg from "./CoursePage/coursedata/images/cyber.png";
import webImg from "./CoursePage/coursedata/images/webdev.png";





function App() {
  return (
    <div className="App">

    {/* <Trial/> */}
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="courses" element={<Course />}/>
          <Route path="/courses/cybersecurity" element={<CourseTemplate currCourse={cyberData} curxPreview={cyberImg}/>}/>
          <Route path="/courses/webdevelopment" element={<CourseTemplate currCourse={webData} curxPreview={webImg}/>}/>
                    

        </Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
