import Hero from './Hero/hero';
import Services from './Services/services';
import Ideas from './Ideas/ideas';
import Learn from './Learn/learn';
import Courses from './Courses/courses';
import Testimonials from './Testimonials/testimonials';
import Certificate from './Certificate/certificate';
import Enroll from '../Layout/Enroll/enroll';

function Homepage() {
  return (
    <div className="Homepage">
      
      
      <Hero/>
      <Services/>
      <Ideas/>
      <Learn/>
      <Courses theHead="Explore Our Courses"/>
      <Testimonials/>
      <Certificate/>
      <Enroll/>

    </div>
  );
}

export default Homepage;
