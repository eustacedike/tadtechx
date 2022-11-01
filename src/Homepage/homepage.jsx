
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

function Homepage() {
  return (
    <div className="Homepage">
      
      
      <Hero/>
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
