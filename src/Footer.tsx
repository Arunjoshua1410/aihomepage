import { useState } from 'react';
import footerLogo from './assets/securionlogo.png';

import './styles/Footer.css';
function Footer(){
    const [isDark,setIsDark]=useState(false);
    const toggleTheme=()=>{
        document.body.classList.toggle('dark-theme');
        setIsDark(!isDark);
    };
    return <>
     <div className='footer'>
            <div>
                <img src={footerLogo} alt="" className='Footerlogo'/>
                <p className="Footerpara">
                Advanced AI agents for cybersecurity automation 
                 and threat detection.
                </p>
            </div>
            <div >
                <p className='footerPara2'>{'Product'.toUpperCase()}</p>
                 <p className='footersubhead3'>Agents</p>
                 <p className='footersubhead3'>Pricing</p>
            </div>
            <div>
               <p className='footerPara2'>{'Resources'.toUpperCase()}</p>
                <p className='footersubhead3'>Documentation</p>
                <p className='footersubhead3'>Support</p>
            </div>
            <div>
            <p className='footerPara2'>{'Legal'.toUpperCase()}</p>
                <p className='footersubhead3'>Privacy Policy</p>
                <p className='footersubhead3'>Terms of Service</p>
            </div>
     </div>
     <div className='footerToggle'>
            <div>
                <p ><span className='footerSubHeading'>&copy;2024 Securion.ai. All rights reserved.</span><span className='madewith'> Made with 💖
                in Manamadurai</span></p>
            </div>
            <div>
                Theme:<button onClick={toggleTheme} className='toggle'>{isDark ? '🌞Light' : '🌙Dark'}</button>
            </div>
     </div>
    </>
}
export default Footer;