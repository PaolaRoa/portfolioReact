import {React, useState} from "react";
import logo from "../assets/images/logoPR.png";
import "../assets/css/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCopyright, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {

    const element = <FontAwesomeIcon icon={faCopyright} className="" />;
    const waIcon = <FontAwesomeIcon icon ={faWhatsapp} className="i" status/>;
    const ghIcon = <FontAwesomeIcon icon = {faGithub} className="i" />;
    const liIcon = <FontAwesomeIcon icon = {faLinkedinIn} className="i" />
    const open = <FontAwesomeIcon icon = {faChevronUp} className = "openCloseFooter" />
    const close = <FontAwesomeIcon icon = {faChevronDown} className = "openCloseFooter" />

    const [footerState, setFstate] = useState(false);

    const openFooter =()=>{
      setFstate(true);

    }
    const closeFooter=()=>{
      setFstate(false);
    }

  return (
    <footer onMouseOver={openFooter} onMouseLeave={closeFooter}>

      <div className="openClose">
      {footerState ? 
         <div>{close}</div>
          :
          <div>{open}</div>}
      </div>

      <div className="logoFooter">
        <img src={logo} alt="PaolaRoa" className="logo" />
      </div>

      <div className="copy">
        <div>
        <p>
        {element} Copyright 2020 Paola Roa<br></br>
        </p>
        <p>
          Todos los derechos reservados<br></br>
        </p>
        </div>
      </div>

      <div className="RRSS">
        <a href="https://wa.me/573214845851" target="blank">
          {waIcon}
        </a>
        <a href="https://www.linkedin.com/in/yprb/" target="blank">
            {liIcon}
        </a>
        <a href="https://github.com/PaolaRoa" target="blank">
            {ghIcon}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
