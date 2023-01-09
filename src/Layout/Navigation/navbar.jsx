import React from 'react';
import { useRef } from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';

import axios from 'axios';

import { useCookies } from 'react-cookie';

import style from './navbar.css';
import logo from './assets/newLogo.png';
import vector from './assets/vector.png';
import search from './assets/searchr.png';
import closee from './assets/close.png';

function Navbar() {

  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const isAuthenticated = (cookies.isAuthenticated === 'true');

  const setAuthToken = token => {
    if (token) {
      // Apply authorization token to every request if logged in
      axios.defaults.headers.common["Authorization"] = token;
    } else {
      // Delete auth header
      delete axios.defaults.headers.common["Authorization"];
    }
  };

//   Log user out
const logoutUser = () => {
// Remove token from local storage
localStorage.removeItem("jwtToken");
// Remove auth header for future requests
setAuthToken(false);
// Set current user to empty object {} which will set isAuthenticated to false
setCookie('isAuthenticated', false, { path: '/' });
removeCookie('FirstName', { path: '/' });
removeCookie('LastName', { path: '/' });
removeCookie('Email', { path: '/' });
removeCookie('Role', { path: '/' });
window.location.reload();
};


  const offeredCourses = [
    {id: 1, title: "Artificial Intelligence", rating: 4.5, link: "artificialintelligence"},
    {id: 2, title: "Ethical Hacking", rating: 4.5, link: "ethicalhacking"},
    {id: 3, title: "Computer Diploma", rating: 4.5, link: "computerdiploma"},
    {id: 4, title: "Web App Development", rating: 4.5, link: "webdevelopment"},
    {id: 5, title: "Software Engineering", rating: 4.5, link: "softwareengineering"},
    {id: 6, title: "Android/IOS Development", rating: 4.5, link: "androidiosdevelopment"},
    {id: 7, title: "Cyber Security", rating: 4.5, link: "cybersecurity"},
    {id: 8, title: "Graphics Design UI/UX", rating: 4.5, link: "graphicsdesign"},
    {id: 9, title: "CMS/BMS/Database MS",  rating: 4.5, link: "databasecourse"},
    {id: 10, title: "Machine Learning", rating: 4.5, link: "machinelearning"},
   ];

   const offeredServices = [
    { id: 1, title: "ICT Training Centre", about: "Progressively incentivize coperative systems through technically sound functionalities" },
    { id: 2, title: "Drop Shipping Services", about: "Progressively incentivize coperative systems through technically sound functionalities" },
    { id: 3, title: "Web Design and Hosting", about: "Progressively incentivize coperative systems through technically sound functionalities" },
    { id: 4, title: "Business Development", about: "Progressively incentivize coperative systems through technically sound functionalities" },
    { id: 5, title: "Penetration Testing", about: "Progressively incentivize coperative systems through technically sound functionalities" },
    { id: 6, title: "Business Branding", about: "Progressively incentivize coperative systems through technically sound functionalities" },
    { id: 7, title: "Data Analysis", about: "Progressively incentivize coperative systems through technically sound functionalities" },
    { id: 8, title: "Graphics Design", about: "Progressively incentivize coperative systems through technically sound functionalities" },
    { id: 9, title: "Android/IOS Development", about: "Progressively incentivize coperative systems through technically sound functionalities" },
    { id: 10, title: "Product Design UI/UX", about: "Progressively incentivize coperative systems through technically sound functionalities" },
    { id: 11, title: "Content Management System", about: "Progressively incentivize coperative systems through technically sound functionalities" },


];

  const [openMobile, setopenMobile] = useState(false);
  const [navBarr, setnavBarr] = useState(false);
  const [cmobNavDrop, setcmobNavDrop] = useState(false);
  const [smobNavDrop, setsmobNavDrop] = useState(false);
  const [amobNavDrop, setamobNavDrop] = useState(false);

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
    if (amobNavDrop) {setamobNavDrop(value => false);}
  }
    
  

  const smobDrop = () => {
    setsmobNavDrop(value => !value);
    if (cmobNavDrop) {setcmobNavDrop(value => false);}
    if (amobNavDrop) {setamobNavDrop(value => false);}
  }

  const amobDrop = () => {
    setamobNavDrop(value => !value);
    if (smobNavDrop) {setsmobNavDrop(value => false);}
    if (cmobNavDrop) {setcmobNavDrop(value => false);}
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
              {offeredCourses.map(eachCourse => {
                    return (
                            <Link to={`/courses/${eachCourse.link}`}>{eachCourse.title}</Link>
                    )
                })}
              </div>

            </div>
            <li className='servx'><Link style={linkStyle} to="/services">Our Services</Link> <img src={vector}></img></li>
            <div className="drop-services">
              <div className="dc-1">
                <h2>Services</h2>
              </div>
              <div className="dc-2">
              {offeredServices.map(eachService => {
                    return (
                            <Link to={`/services`}>{eachService.title}</Link>
                    )
                })}
              </div>
            </div>
            <li className='applyx'><Link style={linkStyle} to="/application">Apply For</Link> <img src={vector}></img></li>
            <div className="drop-apply">
              <div className="dc-1">
                <h2>Apply for</h2>
              </div>
              <div className="dc-3">
                <a href="">1-Month Bootcamp</a> <br />
                <a href="">3-Month Regular Course</a> <br />
                <a href="">Scholarship</a>
                
              </div>
            </div>
          </ul>
        </div>
        <div className='search big-search'>
          <input type='text' placeholder='Search courses'></input>
          <img className='search-icon' src={search} onClick={closeMenu}></img>
        </div>
        <div className='nav-btn gone'
        >
          <button 
          style={{display: isAuthenticated? "none" : "block"}}
          
          className='sign'><Link style={linkStyle} to="/signin">Sign In</Link></button>
          <button
          style={{display: isAuthenticated? "none" : "block"}}
          
          ><Link style={{ textDecoration: 'none', color: 'white' }} to="/signup">Register</Link></button>
          
          <Link style={{textDecoration: 'none', color: 'white'}} to="/dashboard"><button
          style={{display: isAuthenticated? "block" : "none"}}
          >Profile</button>
          </Link>
          <button
          style={{display: isAuthenticated? "block" : "none"}}
          onClick={logoutUser}
          >Log Out</button>
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
        <h3><Link style={{fontWeight: 'bold', fontSize: '18px'}} to="/courses" onClick={closeMenu}>Courses</Link><img src={vector} onClick={cmobDrop} style={{transform: cmobNavDrop ? "rotate(180deg)" : "rotate(0deg)"}}></img></h3>
        <h3><Link style={{fontWeight: 'bold', fontSize: '18px'}} to="/services" onClick={closeMenu}>Services</Link><img src={vector} onClick={smobDrop} style={{transform: smobNavDrop ? "rotate(180deg)" : "rotate(0deg)"}}></img></h3>
        <h3><Link style={{fontWeight: 'bold', fontSize: '18px'}} to="/application" onClick={closeMenu}>Apply</Link><img src={vector} onClick={amobDrop} style={{transform: amobNavDrop ? "rotate(180deg)" : "rotate(0deg)"}}></img></h3>
        <Link style={linkStyle} to="/aboutus" onClick={closeMenu}><h3>About Us</h3></Link>
        <Link style={linkStyle} to="/contactus" onClick={closeMenu}><h3>Contact Us</h3></Link>
        <div className='nav-btn'>
          <Link style={linkStyle} to="/signin" onClick={closeMenu}>
            <button style={{display: isAuthenticated? "none" : "block"}}>Sign In</button>
            </Link>
          <Link style={{ linkStyle }} to="/signup" onClick={closeMenu}>
            <button style={{display: isAuthenticated? "none" : "block"}}>Register</button>
            </Link>
            <Link style={{textDecoration: 'none', color: 'white'}} to="/dashboard"><button
          style={{display: isAuthenticated? "block" : "none"}}
          >Profile</button>
          </Link>
          <button
          style={{display: isAuthenticated? "block" : "none"}}
          onClick={logoutUser}
          >Log Out</button>
        </div>
        <div className='mobile-course-drop' style={{height: cmobNavDrop ? "370px" : "0px"}}>
        {offeredCourses.map(eachCourse => {
                    return (
                            <Link onClick={closeMenu} to={`/courses/${eachCourse.link}`}>{eachCourse.title}</Link>
                    )
                })}
        </div>
        <div className='mobile-service-drop' style={{height: smobNavDrop ? "400px" : "0px"}}>
        
        {offeredServices.map(eachService => {
                    return (
                            <Link onClick={closeMenu} to={`/services`}>{eachService.title}</Link>
                    )
                })}
        </div>
        <div className='mobile-apply-drop' style={{height: amobNavDrop ? "110px" : "0px"}}>
        
            <Link onClick={closeMenu} to="/application">1-Month Bootcamp</Link> <br />
            <Link onClick={closeMenu} to="/application">3-Month Regular Course</Link> <br />
            <Link onClick={closeMenu} to="/applicationg">Scholarship</Link>
        </div>
      </div>

      

    </div>
  );
}


export default Navbar;
