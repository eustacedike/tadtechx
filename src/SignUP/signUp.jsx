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
            <Form msgShow="none" buttonContent="Register"/>
            <p><Link to="/signin" style={linkStyle}>Login</Link> here if you already have an account</p>
        </div>
    );

}

export default SignUp;
