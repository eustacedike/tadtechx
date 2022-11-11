
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

function Homepage() {

  const learnn = [
    { id: 1, title: "Web Development", icon: webber},
    { id: 2, title: "Artificial Intelligence", icon: arti},
    { id: 3, title: "Ethical Hacking", icon: hckng},
    { id: 4, title: "Android/IOS Course", icon: iandroid},

    {id: 5, title: "Computer Diploma Course", icon: iandroid},
    {id: 6, title: "Software Engineering Course", icon: iandroid},
    {id: 7, title: "Cyber Security Course", icon: iandroid},
    {id: 8, title: "Graphics Design UI/UX Course", icon: iandroid},
    {id: 9, title: "Database MS Course", icon: iandroid},
    {id: 10, title: "Machine Learning Course", icon: iandroid},
    

];
  const offerss = [
    { id: 1, title: "Graphics Design", icon: graphdez},
    { id: 2, title: "Web Design and Hosting", icon: webdez},

    {id: 3, title: "ICT Training Centre", icon: analyt},
    {id: 4, title: "Business Development", icon: analyt},
    {id: 5, title: "Penetration Testing", icon: analyt},
    {id: 6, title: "Business Branding", icon: analyt},
    {id: 7, title: "Android/IOS Development", icon: analyt},
    {id: 8, title: "Content Management System", icon: analyt},

    { id: 9, title: "Data Analysis", icon: analyt},
    {id: 10, title: "Product Design UI/UX", icon: analyt},
    { id: 11, title: "Drop Shipping", icon: drops},

        
    

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
        <p onClick={showLearn} style={{background: styl === 1 ? "#f86a03" : "none"}}>Learn</p>
        <p onClick={showServices} style={{background: styl === 2 ? "#f86a03" : "none"}}>Services</p>
        <p onClick={showOthers} style={{background: styl === 3 ? "#f86a03" : "none"}}>Statistics</p>
      </div>
    </div>


      <ServiceHero theTags={deezTags} theBG="service-banner2"/>

      {/* <Hero/> */}
      <Services/>
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
