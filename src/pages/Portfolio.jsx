import {React, useState} from 'react';
import '../assets/css/main.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronCircleRight, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import bBeauty from '../assets/images/portfolio/beebeauty.png';
import mLiz from '../assets/images/portfolio/www.marilizcastillo.com_.png';
import pPan from '../assets/images/portfolio/peterpan.png';
import ctn from '../assets/images/portfolio/ctntarjeta.jpg';
import mag from '../assets/images/portfolio/magnet.jpg';
import retos from '../assets/images/portfolio/retos.png';

const Portfolio = () => {

    const left = <FontAwesomeIcon icon = {faChevronLeft} className="" />;
    const right = <FontAwesomeIcon icon = {faChevronRight} className="" />

    const [active, setActive] = useState(1);

    const handleActive = (direction)=>{
        if(direction === 'next'){
            if(active === 6){
                setActive(1);
            }
            else{
                setActive((active)=>active+1)}
        }
        else{
            if(active === 1){
                setActive(6)
            }
            else{
                setActive((active)=>active-1)
            }
        }
    }


    return ( 
        <div id="portfoliosection">
        <div>
          <h4 className="whitetitle">Mis Proyectos</h4>
        </div>
        <div id="portfoliogallery">
          <div className="container">
            <img className="imgportfolio image" src="/images/portfolio/CARTAS PETERPAN.jpg" alt="Avatar" />
            <div className="overlay">
              <div className="text">Diseño de Papeleria corporativa</div>
            </div>
          </div>
          <div className="container">
            <img className="imgportfolio image" src="/images/portfolio/magnet.jpg" alt="Avatar" />
            <div className="overlay">
              <div className="text">Diseño de Brochure</div>
            </div>
          </div>
          
          <div className="container">
            <img className="imgportfolio image" src="/images/portfolio/CARTAS PETERPAN.jpg" alt="Avatar" />
            <div className="overlay">
              <div className="text">Diseño de Papeleria corporativa</div>
            </div>
          </div>
          <div className="container">
            <img className="imgportfolio image" src="/images/portfolio/ctntarjeta.jpg" alt="Avatar" />
            <div className="overlay">
              <div className="text">Diseño de tarjeta</div>
            </div>
          </div>
          <div className="container">
            <img className="imgportfolio image" src="/images/portfolio/CARTAS PETERPAN.jpg" alt="Avatar" />
            <div className="overlay">
              <div className="text">Diseño de Papeleria corporativa</div>
            </div>
          </div>
          <div className="container">
            <img className="imgportfolio image" src="/images/portfolio/CARTAS PETERPAN.jpg" alt="Avatar" />
            <div className="overlay">
              <div className="text">Diseño de Papeleria corporativa</div>
            </div>
          </div>
        </div>
        </div>

    )
}
 
export default Portfolio;