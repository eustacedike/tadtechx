import React from 'react';
import { Link } from 'react-router-dom';

import style from './signUp.css';


//Images
import logo from "../Layout/Navigation/assets/newLogo.png";

//Components
import Form from '../Form/form';


function SignUp() {

    const linkStyle = {
        color: '#2960ec'
    }

    return (
        <div className='SignIn'>

            <div className='contact-us-form'>
                <form action="">
                    <div className="firstlast">
                        <div className="firstn">
                            <label htmlFor="firstname">First Name</label> <br />
                            <input type="text" />
                        </div>
                        <div className="lastn">
                            <label htmlFor="lastname">Last Name</label> <br />
                            <input type="text" />
                        </div>
                    </div>
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

            <p><Link to="/signin" style={linkStyle}>Login</Link> here if you already have an account</p>
        </div>
    );

}

export default SignUp;
