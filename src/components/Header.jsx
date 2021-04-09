import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
}from 'react-router-dom';
import logo from '../assets/images/logoPR.png';
import '../assets/css/menu.css';

const Header = () => {
    return (

        <div class="menu">
            <a href="#inicio" id="logo-menu">
                <img class="logo" src={logo} alt="" />
            </a>
            <header>
                <input type="checkbox" id="btn-menu" />
                <label for="btn-menu"><i class="fas fa-bars"></i></label>
                <nav class="mainmenu">
                    <ul>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/about">Sobre mí</Link>
                        </li>
                        <li>
                            <Link to="/portfolio">Portafolio</Link>
                        </li>
                        <li>
                            <Link to="/services">Servicios</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contáctame</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>

     );
}
 
export default Header;