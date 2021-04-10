import React from "react";
import logo from "../assets/images/logoPR.png";
import "../assets/css/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCopyright, } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {

    const element = <FontAwesomeIcon icon={faCopyright} className="i" />;
    const waIcon = <FontAwesomeIcon icon ={faWhatsapp} className="i" status/>;
    const ghIcon = <FontAwesomeIcon icon = {faGithub} className="i" />;
    const liIcon = <FontAwesomeIcon icon = {faLinkedinIn} className="i" />
  return (
    <footer>
      {/* <div class="logo">
        <img class="logo" src={logo} alt="Paola Roa"></img>
      </div> */}
      <div className="copy">
        <p>
        {element} Copyright 2020 Paola Roa<br></br>
        </p>
        <p>
          Todos los derechos reservados<br></br>
        </p>
      </div>

      <div class="RRSS">
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
