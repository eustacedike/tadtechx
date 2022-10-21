import Navbar from './Navigation/navbar';
import Hero from './Hero/hero';
import Services from './Services/services';
import Ideas from './Ideas/ideas';
import Learn from './Learn/learn';
import Courses from './Courses/courses';
import Testimonials from './Testimonials/testimonials';
import Certificate from './Certificate/certificate';
import Footer from './Footer/footer';
import Enroll from './Enroll/enroll';

function Homepage() {
  return (
    <div className="Homepage">
      
      
      <Navbar/>
      <Hero/>
      <Services/>
      <Ideas/>
      <Learn/>
      <Courses/>
      <Testimonials/>
      <Certificate/>
      <Enroll/>
      <Footer/>

    </div>
  );
}

export default Homepage;
