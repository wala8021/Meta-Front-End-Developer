import logo from '../../images/logo.png';
import './header.css'; //applying css styles, you just import ONLY

export default function Header(){
    return (
        <div className="header-container">
        {/* "This is the main header"; */}
            <div className='logo'>
               <a href="/"><img src={logo} alt="logo"/></a> 
            </div>
        
        </div>

    )
}
