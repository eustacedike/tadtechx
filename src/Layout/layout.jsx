import { Outlet, Link } from "react-router-dom";

import React from 'react';

import Navbar from './Navigation/navbar';
import Footer from './Footer/footer';



function Layout () {
    
        return (
            <div className='Layout'>
               
               <Navbar/>

               <Outlet />

                <Footer/>
               
            </div>
        );
    
}

export default Layout;
