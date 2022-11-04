import React from 'react';
import { Link } from 'react-router-dom';

import style from './signUp.css';


//Images
import logo from "../Layout/Navigation/assets/newLogo.png";


function SignUp() {

    const linkStyle = {
        textDecoration: 'none',
        color: '#f78b26'
      }

    return (
        <div className='SignIn'>
           <div className="signin-box">
            <h2>Register With Us</h2>
            <form action="">
                <input type="text" placeholder='First Name' name="" id=""/>
                <input type="text" placeholder='Last Name' name="" id=""/>
                <input type="email" placeholder='Email' name="" id="" />
                <label htmlFor="dateofbirth">Date of Birth</label>
                <input type="date" name="" id="" />
                <input type="password" placeholder='Choose a password' name="" id="" />

                <button>REGISTER</button>
                <p>or <Link to="/signin" style={linkStyle}>Log in</Link> if you already have an account</p>
            </form>
           </div>
        </div>
    );

}

export default SignUp;
