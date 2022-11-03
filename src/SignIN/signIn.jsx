import React from 'react';
import style from './signIn.css';


//Images
import logo from "../Layout/Navigation/assets/newLogo.png";


function SignIn() {

    const linkStyle = {
        textDecoration: 'none',
        color: '#f78b26'
      }

    return (
        <div className='SignIn'>
           <div className="signin-box">
            <img src={logo} alt="" />
            <form action="">
                <input type="text" placeholder='Enter Username or email' name="" id="" />
                <input type="password" placeholder='Enter password' name="" id="" />

                <button>LOG IN</button>
                <p>or <a href="" style={linkStyle}>sign up</a> if you don't have an account yet</p>
            </form>
           </div>
        </div>
    );

}

export default SignIn;
