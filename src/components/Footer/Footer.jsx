import React from 'react'
import './Footer.scss';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';


const Footer = () => {
  return (
    <footer className='footer'>
        <div className="row">
            <h1>Khelo India</h1>
            <p>Join us and support the Khelo India initiative to transform India into a global sporting powerhouse in the upcoming years.</p>
            <div className="social-icons">
                
                     <a href="" target='_blank'><FacebookIcon  className='icons' /> </a>                    
                     <a href="" target='_blank'><InstagramIcon className='icons' /> </a>                   
                     <a href="" target='_blank'> <YouTubeIcon  className='icons' /> </a>                    
                    <a href="" target='_blank'> <TwitterIcon   className='icons' /> </a>                    
                
            </div>
            <div className="credit"> <p>
            Copyright By MINISTRY OF YOUTH AFFAIRS AND SPORTS. Khelo india © 2018. Designed By <span>SHWEGO</span></p>   </div>
            </div>
        
    </footer>
  )
}

export default Footer;