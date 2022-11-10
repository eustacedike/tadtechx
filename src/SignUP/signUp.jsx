import React from 'react';
import { Link } from 'react-router-dom';

import style from './signUp.css';


//Images
import logo from "../Layout/Navigation/assets/newLogo.png";

//Components
import Form from '../Form/form';


function SignUp() {

    const linkStyle = {
        textDecoration: 'none',
        color: '#f78b26'
      }

    return (
        <div className='SignIn'>
            <h2>Register</h2>
            <Form msgShow="none" buttonContent="Register"/>
        </div>
    );

}

export default SignUp;
