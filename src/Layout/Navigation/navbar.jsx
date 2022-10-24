import React from 'react';
import { useRef } from 'react';
import style from './navbar.css';
import logo from './assets/newLogo.png';
import vector from './assets/vector.png';
import search from './assets/search.png';

function Navbar() {

  const hamm = useRef();
  const mobilee = useRef();

  const openMenu = () => {
      hamm.current.classList.toggle('change');
      mobilee.current.classList.toggle('inView');
  };

    return (
      <div className='Navbar'>
        <nav>
          <img className='logo' src={logo} />
          <div className='items'>
            <ul>
              <li className='coux'>Courses <img src={vector}></img></li>
              <div className="drop-courses">
          <div className="dc-1">
            <h2>Courses</h2>
          </div>
          <div className="dc-2">
            <a href="">Software Engineering</a>
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
              <li className='servx'>Our Services <img src={vector}></img></li>
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
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className='search'>
            <input type='text' placeholder='Search courses'></input>
            <img className='search-icon' src={search}></img>
          </div>
          <div className='nav-btn gone'>
            <button className='sign'>Sign In</button>
            <button>Register</button>
          </div>
          <div className='hamburger' onClick={openMenu} ref={hamm}>
            <div className='bar1'></div>
            <div className='bar2'></div>
            <div className='bar3'></div>
          </div>
        </nav>

        <div className='mobile' ref={mobilee}>
          <a href=''><h3>Courses</h3></a>
          <a href=''><h3>Services</h3></a>
          <a href=''><h3>About Us</h3></a>
          <a href=''><h3>Register</h3></a>
          <div className='nav-btn'>
            <button>Sign In</button>
            <button>Register</button>
          </div>
        </div>

        
      </div>
    );
  }


export default Navbar;
