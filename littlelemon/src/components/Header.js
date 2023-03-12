import logo from '../images/logo.png';
import '../stylesheet/mystyles.css'; //applying css styles, you just import ONLY

export default function Header(){
    return (
        <div class="header-container">
        {/* "This is the main header"; */}
        <img src={logo} alt="logo"/>
        </div>

    )
}
