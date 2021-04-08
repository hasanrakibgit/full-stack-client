
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/Misti Village.png';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <nav className= "nav">
                <ul>
                    <li>
                        <img  className ="logo"src={logo} alt=""/>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/order">Order</Link>
                    </li>
                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                    <li>
                        <Link to="/deals">Deals</Link>
                    </li>
                    <li>
                        <Link to="/login">Login        </Link>
                    </li>
                    <button onClick = {() => setLoggedInUser ({})}>Log Out</button>
                </ul>
                
            </nav>
        </div>
    );
};

export default Header;