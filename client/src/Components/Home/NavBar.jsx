import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function NavBar() {

return (
<div className='Menu2'>
                <h1 className="Title">apiDogs</h1>
                <ul>
                    <li><Link to='/home'>HOME</Link></li>
                    <li><Link to='/newDog'>CREATE</Link></li>
                    <li><Link>ABOUT</Link></li>
                </ul>
            </div>
 )
}