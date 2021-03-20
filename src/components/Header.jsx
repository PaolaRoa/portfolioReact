import React from 'react';
import {
    BrowserRouter as Router,
    Link, 
    Switch,
    Route
    }
  from 'react-router-dom';

const Header = () => {
    return ( 
        <header>
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
        </header>

     );
}
 
export default Header;