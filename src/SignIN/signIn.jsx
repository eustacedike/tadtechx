import React from 'react';
import { Link } from 'react-router-dom';

import style from './signIn.css';


//Images
import logo from "../Layout/Navigation/assets/newLogo.png";


//Components
import Form from '../Form/form';

function SignIn() {

    const linkStyle = {
        textDecoration: 'none',
        color: '#f78b26'
      }

    return (
        <div className='SignIn'>
            <h2>Sign In</h2>
            <Form nameShow="none" msgShow="none" buttonContent="Log In"/>
           {/* <div className="signin-box">
            <h2>Sign In</h2>
            <form action="">
                <input type="text" placeholder='Enter Username or email' name="" id="" />
                <input type="password" placeholder='Enter password' name="" id="" />

                <button>LOG IN</button>
                <p>or <Link to="/signup" style={linkStyle}>sign up</Link> if you don't have an account yet</p>
            </form>
           </div> */}
        </div>
    );

}

export default SignIn;
