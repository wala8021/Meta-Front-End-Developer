import logo from '../../images/logo.png';
import './footer.css'; //applying css styles, you just import ONLY

export default function Footer(){
    return (
        <div class="footer">
            {/* "This is the Footer component"; */}
            <section class="logo"><img src={logo} width="70%" alt="logo"></img></section>
            <section>
                <h4>Doormat<br/> Navigation</h4>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </section>
            <section>
                <h4>Contact</h4>
                <p>Address<br/>phone number<br/>email</p>
            </section>
            <section>
                <h4>Social Media Links</h4>
                <ul>
                    <li><a href="#">facebook</a></li>
                    <li><a href="#">twitter</a></li>
                    <li><a href="#">instagram</a></li>
                </ul>
            </section>
        </div>
    )
}

