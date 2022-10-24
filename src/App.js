import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Layout from "./Layout/layout";
import Homepage from './Homepage/homepage';
import Course from './Course/course.jsx';

import CyberSec from './CoursePage/CyberSec/cybersec';




function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="courses" element={<Course />}/>
          <Route path="cybersecurity" element={<CyberSec />}/>
          

        </Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
