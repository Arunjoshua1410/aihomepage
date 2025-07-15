import './styles/Header.css';
import images from './assets/securionlogo.png';
function Header(){
  return <>
    <div className='header'>
        <div>
                <img src={images} alt="" className='headerlogo'/>
        </div>
        <div className='links'>
            <a href="">Agents</a>
            <a href="">Pricing</a>
            <a href="">Docs</a>
            <a href="">Resources&#8595;</a>
        </div>
        <div className='headerbtn'>
            <div>
                <button className='sign-in'>Sign In</button>
            </div>
            <div>
                <button className='GetStarted'>
                    Get Started
                </button>
            </div>
        </div>
    </div>
   </>
}
export default Header;