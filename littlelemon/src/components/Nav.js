import '../stylesheet/mystyles.css'; //applying css styles, you just import ONLY

export default function Nav(){
    return (
        // "This is a navigation component"
        <div class="nav">
            <ul class="nav-container">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Menu</a>
                </li>
                <li>
                    <a href="#">Reservations</a>
                </li>
                <li>
                    <a href="#">Order online</a>
                </li>
                <li>
                    <a href="#">Login</a>
                </li>
            </ul>
        </div>
    )
}