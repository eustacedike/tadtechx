import React from 'react';
import { Link } from 'react-router-dom';

import style from './signIn.css';


//Images
import logo from "../Layout/Navigation/assets/newLogo.png";


//Components
import Form from '../Form/form';

function SignIn() {

    const linkStyle = {
        // textDecoration: 'none',
        color: '#2960ec',
    }

    return (
        <div className='SignIn'>

            <div className='contact-us-form'>
                <form action="">
                    
                    <div className="email-add">
                        <label htmlFor="email">Email Address</label> <br />
                        <input type="email" />
                    </div>
                    <div className="email-add">
                        <label htmlFor="password" >Password</label> <br />
                        <input type="password" />
                    </div>
                    <div className="snd-btn">
                        <button>Submit</button>
                    </div>

                </form>
            </div>


            <p><Link style={linkStyle}>Forgot Password?</Link></p> <br />

            <p>or <Link to="/signup" style={linkStyle}>sign up</Link> if you don't have an account yet</p>

        </div>
    );

}

export default SignIn;
