import { SiLinkedin } from 'react-icons/si';
import { VscGithub } from 'react-icons/vsc';
import './Footer.css';

export const Footer = () => {


  return (
    <>
        <div className='Footer'>

            <p>Developed by Mauricio Follonier </p>

            <a href="https://github.com/mauriciofollonier/">
                <VscGithub className='footerIcon'/>
            </a>

                <a href="https://www.linkedin.com/in/mauricio-damian-follonier/">
                <SiLinkedin className='footerIcon'/>
            </a>

        </div>
    </>
  )
}
