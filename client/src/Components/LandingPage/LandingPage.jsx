import React from 'react';
import {NavLink} from "react-router-dom";
import videoPerros from './media/Slow motion - Dogs Loving Winter.mp4';
import './LandingPage.css';

export default function LandingPage() {
    return (
        <div className='landingDiv'>
            <h1 className="welcome">Welcome</h1>
            <video className="video" src={videoPerros} autoPlay loop muted controls poster='https://wallpapercave.com/wp/wp3754289.jpg'/>
            
            
        <div className="NavLink">
            <h3 className="getin">Get In!</h3>
            <NavLink to="/home" ><img className="logo" src="https://image.flaticon.com/icons/png/512/3905/3905057.png" alt="logo" /></NavLink>
        </div>


        </div>
    )
}

// https://image.flaticon.com/icons/png/512/3905/3905057.png