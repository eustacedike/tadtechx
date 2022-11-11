import React from 'react';
import { useRef } from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';

import style from './navbar.css';
import logo from './assets/newLogo.png';
import vector from './assets/vector.png';
import search from './assets/searchr.png';
import closee from './assets/close.png';

function Navbar() {



  const [openMobile, setopenMobile] = useState(false);
  const [navBarr, setnavBarr] = useState(false);
  const [cmobNavDrop, setcmobNavDrop] = useState(false);
  const [smobNavDrop, setsmobNavDrop] = useState(false);

  const newSearch = () => {
    setnavBarr(value => !value);
  }

  const openMenu = () => {
    setopenMobile(value => !value);
  }

  const closeMenu = () => {
    setopenMobile(value => false);
    window.scrollTo(0,0);
  }

  const cmobDrop = () => {
    setcmobNavDrop(value => !value);
    if (smobNavDrop) {setsmobNavDrop(value => false);}
  }

  const smobDrop = () => {
    setsmobNavDrop(value => !value);
  }

  const linkStyle = {
    textDecoration: 'none',
    color: '#f86a03',
  }

  return (
    <div className='Navbar'>
      <nav style={{height: navBarr ? '110px' : '62px'}}>
        <Link style={linkStyle} to="/" onClick={closeMenu}>
          {/* <img className='logo' src={logo} /> */}
          <h3 className='logotxt'>TAD <span className='tech'>Tech</span></h3>
          </Link>
        <img src={navBarr ? closee : search} alt="" className='mob-search' onClick={newSearch} />
        <div className='items'>
          <ul>
            <li className='coux'><Link onClick={closeMenu} style={linkStyle} to="/courses">Courses</Link> <img src={vector}></img></li>
            <div className="drop-courses">
              <div className="dc-1">
                <h2>Courses</h2>
              </div>
              <div className="dc-2">
                <Link to="courses/cybersecurity">Software Engineering</Link>
                <a href="">Graphics Design UI/UX</a>
                <a href="">Android/IOS Development</a>
                <a href="">CMS/BMS/Database MS</a>
                <a href="">Machine Learning</a>
                <a href="">Ethical Hacking</a>
                <a href="">Computer Diploma</a>
                <a href="">Cyber Security</a>
                <a href="">Artificial Intelligence</a>
              </div>

            </div>
            <li className='servx'><Link style={linkStyle} to="/services">Our Services</Link> <img src={vector}></img></li>
            <div className="drop-services">
              <div className="dc-1">
                <h2>Services</h2>
              </div>
              <div className="dc-2">
                <a href="">Drop Shipping Services</a>
                <a href="">Web Design and Hosting</a>
                <a href="">Penetration Testing</a>
                <a href="">ICT Training Center</a>
                <a href="">Business Branding</a>
                <a href="">Data Analysis</a>
                <a href="">Graphics Design</a>
                <a href="">Business Development</a>
                <a href="">Android/IOS Development</a>
                <a href="">Product Design UI/UX</a>
                <a href="">Content Management System</a>
              </div>
            </div>
            <li className='applyx'><Link style={linkStyle} to="/services">Apply For</Link> <img src={vector}></img></li>
            <div className="drop-apply">
              <div className="dc-1">
                <h2>Apply for</h2>
              </div>
              <div className="dc-3">
                <a href="">1-Month Bootcamp</a> <br />
                <a href="">3-Month Regular Course</a>
                
              </div>
            </div>
          </ul>
        </div>
        <div className='search big-search'>
          <input type='text' placeholder='Search courses'></input>
          <img className='search-icon' src={search} onClick={closeMenu}></img>
        </div>
        <div className='nav-btn gone'>
          <button className='sign'><Link style={linkStyle} to="/signin">Sign In</Link></button>
          <button><Link style={{ textDecoration: 'none', color: 'white' }} to="/signup">Register</Link></button>
        </div>
        <div className={openMobile ? 'hamburger change' : 'hamburger'} onClick={openMenu}>
          <div className='bar1'></div>
          <div className='bar2'></div>
          <div className='bar3'></div>
        </div>

        <div className='search' id='search2'>
          <input type='text' placeholder='Search courses'></input>
          <img className='search-icon' src={search} onClick={closeMenu}></img>
        </div>
      </nav>

      <div className={openMobile ? 'mobile inView' : 'mobile'}>
        <h3><Link style={{fontWeight: 'bold', fontSize: '16px'}} to="/courses" onClick={closeMenu}>Courses</Link><img src={vector} onClick={cmobDrop} style={{transform: cmobNavDrop ? "rotate(180deg)" : "rotate(0deg)"}}></img></h3>
        <h3><Link style={{fontWeight: 'bold', fontSize: '16px'}} to="/services" onClick={closeMenu}>Services</Link><img src={vector} onClick={smobDrop} style={{transform: smobNavDrop ? "rotate(180deg)" : "rotate(0deg)"}}></img></h3>
        <Link style={linkStyle} to="/aboutus" onClick={closeMenu}><h3>About Us</h3></Link>
        <Link style={linkStyle} to="/contactus" onClick={closeMenu}><h3>Contact Us</h3></Link>
        <div className='nav-btn'>
          <Link style={linkStyle} to="/signin" onClick={closeMenu}><button>Sign In</button></Link>
          <Link style={{ linkStyle }} to="/signup" onClick={closeMenu}><button>Register</button></Link>
        </div>
        <div className='mobile-course-drop' style={{height: cmobNavDrop ? "350px" : "0px"}}>
              <Link to="courses/cybersecurity">Software Engineering</Link>
                <Link to="courses/cybersecurity">Graphics Design UI/UX</Link>
                <Link to="courses/cybersecurity">Android/IOS Development</Link>
                <Link to="courses/cybersecurity">CMS/BMS/Database MS</Link>
                <Link to="courses/cybersecurity">Machine Learning</Link>
                <Link to="courses/cybersecurity">Ethical Hacking</Link>
                <Link to="courses/cybersecurity">Computer Diploma</Link>
                <Link to="courses/cybersecurity">Cyber Security</Link>
                <Link to="courses/cybersecurity">Artificial Intelligence</Link>
        </div>
        <div className='mobile-service-drop' style={{height: smobNavDrop ? "400px" : "0px"}}>
        
                <Link to="services/drpshipping">Drop Shipping Services</Link>
                <Link to="services/drpshipping">Web Design and Hosting</Link>
                <Link to="services/drpshipping">Penetration Testing</Link>
                <Link to="services/drpshipping">ICT Training Center</Link>
                <Link to="services/drpshipping">Business Branding</Link>
                <Link to="services/drpshipping">Data Analysis</Link>
                <Link to="services/drpshipping">Graphics Design</Link>
                <Link to="services/drpshipping">Business Development</Link>
                <Link to="services/drpshipping">Android/IOS Development</Link>
                <Link to="services/drpshipping">Product Design UI/UX</Link>
                <Link to="services/drpshipping">Content Management System</Link>
        </div>
      </div>

      

    </div>
  );
}


export default Navbar;
