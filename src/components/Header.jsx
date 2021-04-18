import {React, useState} from 'react';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
}from 'react-router-dom';
import logo from '../assets/images/logoPR.png';
import '../assets/css/menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    
    const menu = <FontAwesomeIcon icon={faBars} className="" />;
    const close = <FontAwesomeIcon icon={faTimes} className="" />;

    const [solidHeader, setsolidHeader] = useState(true);
    const [movilMenu, setMovilMenu] = useState(false);
    
    const handleMenu =()=>{
        setMovilMenu(!movilMenu);
        console.log(movilMenu);
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

        <div className={solidHeader?'menu':'menu darkmenu'} id="menu" >
            <Link to="/" id="logo-menu">
                <img className="logo" src={logo} alt="" />
            </Link>
            <header>
                <button id="btn-menu" onClick={()=>handleMenu()}>{
                    movilMenu? close : menu
                }</button>
                <nav className="mainmenu">
                    <ul>
                    <li>
                            <a  href='#bienvenida'>Inicio</a>
                        </li>
                        <li>
                            <a href='#about-me'>Sobre mí</a>
                        </li>
                        <li>
                            <a href='#portfoliosection'>Portafolio</a>
                        </li>
                        <li>
                            <a href='#contact-container'>Contáctame</a>
                        </li>
                    </ul>
                </nav>
                <nav className={movilMenu? 'movilmenu' : 'movilmenu hide'}>
                                        <ul>
                        <li>
                            <a  href='#bienvenida'>Inicio</a>
                        </li>
                        <li>
                            <a href='#about-me'>Sobre mí</a>
                        </li>
                        <li>
                            <a href='#portfoliosection'>Portafolio</a>
                        </li>
                        <li>
                            <a href='#contact-container'>Contáctame</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>

     );
}
 
export default Header;