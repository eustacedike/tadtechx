
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

  const deezTags = [
    { id: 1, title: "Web Development", icon: webber},
    { id: 2, title: "Graphics Design", icon: graphdez},
    { id: 3, title: "Web Design and Hosting", icon: webdez},
    { id: 4, title: "Drop Shipping", icon: drops},
    { id: 5, title: "Data Analysis", icon: analyt},
    { id: 6, title: "Artificial Intelligence", icon: arti},
    { id: 7, title: "Ethical Hacking", icon: hckng},
    { id: 8, title: "Android/IOS Course", icon: iandroid},
    

];


  return (
    <div className="Homepage">
      
      <ServiceHero theTags={deezTags} theBG="bgg2"/>

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
