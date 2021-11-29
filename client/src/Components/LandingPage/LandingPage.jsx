import React from 'react';
import {NavLink} from "react-router-dom";
import './LandingPage.css';

export default function LandingPage() {
    return (
        <div className='greatDiv'>

            <h1 className="welcome">Welcome</h1>

        <div className="enterDiv">
            <h3 className="getin">Get In!</h3>
            <NavLink to="/home" ><img className="logo" src="https://image.flaticon.com/icons/png/512/3905/3905057.png" alt="logo" /></NavLink>
        </div>


        </div>
    )
}

// https://image.flaticon.com/icons/png/512/3905/3905057.png