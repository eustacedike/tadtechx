
import { useState } from 'react';


import style from './homepage.css';

import Hero from './Hero/hero';
import Services from './Services/services';
import Ideas from './Ideas/ideas';
import Learn from './Learn/learn';
import Courses from './Courses/courses';
import Testimonials from './Testimonials/testimonials';
import Certificate from './Certificate/certificate';
import Enroll from '../Layout/Enroll/enroll';
import CourseMobile from './CourseMobile/coursemobile';

import ServiceHero from '../Service/ServiceHero/serviceHero';


//Images
import webdez from '../Service/ServiceHero/assets/webdesign.png';
import graphdez from '../Service/ServiceHero/assets/graphdesign.png';
import analyt from '../Service/ServiceHero/assets/analytics.png';
import arti from '../Service/ServiceHero/assets/arti.png';
import cybrr from '../Service/ServiceHero/assets/cybrr.png';
import drops from '../Service/ServiceHero/assets/drops.png';
import hckng from '../Service/ServiceHero/assets/hckng.png';
import iandroid from '../Service/ServiceHero/assets/iandroid.png';
import webber from '../Service/ServiceHero/assets/webber.png';

import cybb from '../CoursePage/coursedata/icons/cybb.png';
import dbicon from '../CoursePage/coursedata/icons/dbicon.png';
import diplo from '../CoursePage/coursedata/icons/diplo.png';
import soft from '../CoursePage/coursedata/icons/soft.png';


//icons
import learner from './assets/learn.png';
import servi from './assets/servi.png';


function Homepage() {

  const learnn = [
    { id: 1, title: "Web Development", icon: webber, link: "/courses/webdevelopment"},
    { id: 2, title: "Artificial Intelligence", icon: arti, link: "/courses/artificialintelligence"},
    { id: 3, title: "Ethical Hacking", icon: hckng, link: "/courses/ethicalhacking"},
    { id: 4, title: "Android/IOS Course", icon: iandroid, link: "/courses/androidiosdevelopment"},

    {id: 5, title: "Computer Diploma Course", icon: diplo, link: "/courses/computerdiploma"},
    {id: 6, title: "Software Engineering Course", icon: soft, link: "/courses/softwareengineering"},
    {id: 7, title: "Cyber Security Course", icon: cybb, link: "/courses/cybersecurity"},
    {id: 8, title: "Graphics Design UI/UX Course", icon: graphdez, link: "/courses/graphicsdesign"},
    {id: 9, title: "Database MS Course", icon: dbicon, link: "/courses/databasecourse"},
    
    

];
  const offerss = [
    { id: 1, title: "Graphics Design", icon: graphdez},
    { id: 2, title: "Web Design and Hosting", icon: webdez},

    {id: 3, title: "ICT Training Centre", icon: analyt},
    {id: 4, title: "Business Development", icon: analyt},
    
    {id: 5, title: "Business Branding", icon: analyt},
    {id: 6, title: "Android/IOS Development", icon: analyt},
    {id: 7, title: "Content Management System", icon: analyt},

    { id: 8, title: "Data Analysis", icon: analyt},
    
    { id: 9, title: "Drop Shipping", icon: drops},

        
    

];
  const otherss = [
    { id: 1, title: "Web Development", icon: webber},
    { id: 2, title: "Graphics Design", icon: graphdez},
    { id: 3, title: "Web Design and Hosting", icon: webdez},
    { id: 4, title: "Drop Shipping", icon: drops},
    { id: 5, title: "Data Analysis", icon: analyt},
    { id: 6, title: "Artificial Intelligence", icon: arti},
    { id: 7, title: "Ethical Hacking", icon: hckng},
    { id: 8, title: "Android/IOS Course", icon: iandroid},
    { id: 9, title: "Android/IOS Course", icon: iandroid},
    

];



var [deezTags, setDeezTags] = useState(learnn);
var [styl, setStyl] = useState(1);

const showLearn = () => {
  setDeezTags(learnn);
  setStyl(value => 1)
}
const showServices = () => {
  setDeezTags(offerss);
  setStyl(value => 2)
}
const showOthers = () => {
  setDeezTags(otherss);
  setStyl(value => 3)
}


  return (
    <div className="Homepage">
      
    <div className="filterr">
      <div className="filterr-box">
        <p onClick={showLearn} style={{background: styl === 1 ? "black" : "none", color: styl === 1 ? "white" : "black"}}>
          <img src={learner} style={{filter: styl === 1 ? "invert(100)" : "invert(0)"}} alt="" />
          Learn</p>
        <p onClick={showServices} style={{background: styl === 2 ? "black" : "none", color: styl === 2 ? "white" : "black"}}>
        <img src={servi} style={{filter: styl === 2 ? "invert(100)" : "invert(0)"}} alt="" />
          Services</p>
        <p onClick={showOthers} style={{background: styl === 3 ? "black" : "none", color: styl === 3 ? "white" : "black"}}>Statistics</p>
      </div>
    </div>


      <ServiceHero theTags={deezTags} theBG="service-banner2"/>

      {/* <Hero/> */}

      {/* <Services/> */}

      {/* <Ideas/> */}

      <div className="homeCourses">
        <Courses theHead="Explore Our Courses" headStyle="Courses-h2"/>
      </div>

      <div className="homeCoursesMobile">
        <CourseMobile/>
      </div>
      
      <Learn/>
      <Testimonials/>
      <Certificate/>
      <Enroll/>

    </div>
  );
}

export default Homepage;
