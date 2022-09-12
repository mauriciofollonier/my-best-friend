import { Link } from 'react-router-dom';
import { SiDatadog } from 'react-icons/si';
import { Searchbar } from '../Searchbar/Searchbar';


export const Navbar = () => {

    let click = 1;

    const deployFilters = () => { 

        if( click === 1 ) {

            document.querySelector('.Filters').style.display = "flex";
            click = click + 1;

        } else {

            document.querySelector('.Filters').style.display = "none";      
            click = 1;
        }   
    }

    return (
        <>
        <div className='Menu'>
            <a className="Title" href='/home'>
                <SiDatadog/>
                <h1>MyBestFriend</h1>
            </a>
            <ul>
                <li className='Sbar'><Searchbar/></li>                   
                <a className='AdS'onClick={ deployFilters }>Order & Filters</a>
                <li className='btnC'><Link to='/newDog'>CREATE</Link></li>
                <li className='btnA'><Link to="">ABOUT</Link></li>
            </ul>
        </div>
        </>
    )
}