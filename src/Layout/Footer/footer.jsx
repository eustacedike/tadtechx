import React from 'react';
import { useRef } from 'react';
import style from './footer.css';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import twitter from './assets/twitter.png';
import phone from './assets/phone.png';
import location from './assets/location.png';
import mail from './assets/mail.png';


function Footer() {

    const footerr = useRef();

    const chck = () => {
        
    // console.log(window.pageYOffset);
    var fromTheTop = footerr.current.getBoundingClientRect().top;

    
    if (window.pageYOffset > fromTheTop) {
        footerr.current.style.transform = 'translateX(0%)';
    } else {
        footerr.current.style.transform = 'translateX(-100%)';
    }
        };

    setInterval(chck, 50);

    // window.addEventListener = ('scroll', chck);


    return (
        <div className='Footer' ref={footerr}>
            <div className="footer-1">
                <ul>
                    <li><h5>Company Info</h5></li> <br />
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Courses</a></li>
                </ul>
                <ul>
                    <li><h5>Explore</h5></li> <br />
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Courses</a></li>
                </ul>
                <ul>
                    <li><h5>Get In Touch</h5></li> <br />
                    <li><a href="tel:+2348030426679"><img src={phone} alt="" />+234 803 042 6679, +234 915 505 4181</a></li>
                    <li><a href=""><img src={location} alt="" />50 Apara Link Road, Rumuigbo PH</a></li>
                    <li><a href="mailto:tadcreativenetwork@gmail.com"><img src={mail} alt="" />Tadcreativenetwork@gmail.com</a></li>
                </ul>
                
            </div>
            <div className="footer-2">
                <p>&copy; TAD Creative. All rights reserved</p>
                <div className="socials">
                    <a><img src={facebook} alt="facebook" /></a>
                    <a><img src={instagram} alt="instagram" /></a>
                    <a><img src={twitter} alt="twitter" /></a>
                </div>
            </div>
        </div>
    );

}

export default Footer;
