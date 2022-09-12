
import { SiDatadog } from 'react-icons/si';
import { FaSitemap } from 'react-icons/fa';
import { GiSittingDog } from 'react-icons/gi';
import './LandingPage.css';
import dogVideo from './video/dogVideo.mp4'

export const LandingPage = () => {

    return (
        <div className='greatDiv'>
            <div className='mainLandingDiv'>
            
                <video 
                src={dogVideo}
                type="video/mp4"
                autoPlay
                muted
                loop
                >
                </video>
            
                <div className='logoLanding'>
                    <a className="landingTitle" href='/home'>
                    <SiDatadog/>
                    <h1>MyBestFriend</h1>
                    </a>
                </div>

            </div>
            <div className='sectionIIDiv'>
                <ul className='callerLanding'>
                    <li>
                        <FaSitemap/>
                        Know all info about existing Dogs Breeds
                    </li>
                    <li>
                        <GiSittingDog/>
                        Create your own Breed
                    </li>
                </ul>
            </div>
        </div>
    )
}
