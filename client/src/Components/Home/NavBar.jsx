import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar';

export default function NavBar() {

var click = 1;

function deployFilters(){    
            if(click==1){
            document.querySelector('.Filters').style.display = "flex";
            click = click + 1;
            } else {
            document.querySelector('.Filters').style.display = "none";      
            click = 1;
            }   
        }

return (
<div className='Menu'>
                <a className="Title" href='/home'>apiDogs</a>
                <ul>
                    <li className='Sbar'><SearchBar/></li>                   
                    <a  className='AdS'onClick={(e) => deployFilters(e)}>Advanced Search</a>
                    <li className='btnC'><Link to='/newDog'>CREATE</Link></li>
                    <li className='btnA'><Link to="">ABOUT</Link></li>
                </ul>
            </div>
 )
}