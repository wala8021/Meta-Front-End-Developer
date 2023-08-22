import './nav.css'; //applying css styles, you just import ONLY

export default function Nav(){
    return (
        // "This is a navigation component"
        <div className="nav-container">
            <div className="nav">
            <ul>
                <li className="nav--home">
                    <a href="/">Home</a>
                </li>
                <li className="nav--about">
                    <a href="#">About</a>
                </li>
                <li className="nav--menu">
                    <a href="#">Menu</a>
                </li>
                <li className="nav--reservation">
                    <a href="/Reservations/Findtable">Reservations</a>
                </li>
                <li className="nav--orderonline">
                    <a href="#">Order-online</a>
                </li>
                <li className="nav--login">
                    <a href="#">Login</a>
                </li>
            </ul>
            </div>

        </div>
    )
}