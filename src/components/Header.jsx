import {React, useState} from 'react';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
}from 'react-router-dom';
import logo from '../assets/images/logoPR.png';
import '../assets/css/menu.css';

const Header = () => {

    const [solidHeader, setsolidHeader] = useState('true');
    
    const setHeader=()=>{
        setsolidHeader(!solidHeader);
    }
    
    const changeHeader=()=>{
        if(window.scrollY>100){
            setsolidHeader(false);    
        }
        else{
            setsolidHeader(true)
        }
    }
    
    window.addEventListener('scroll',()=>changeHeader())

    return (

        <div className={solidHeader?'menu':'darkmenu'} id="menu" >
            <Link to="/" id="logo-menu">
                <img className="logo" src={logo} alt="" />
            </Link>
            <header>
                <input type="checkbox" id="btn-menu" />
                <label htmlFor="btn-menu"><i className="fas fa-bars"></i></label>
                <nav className="mainmenu">
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