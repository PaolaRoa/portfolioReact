import { React } from 'react';
import '../assets/css/main.css';


import bBeauty from '../assets/images/portfolio/beebeauty.png';
import mLiz from '../assets/images/portfolio/www.marilizcastillo.com_.png';
import pPan from '../assets/images/portfolio/peterpan.png';
import ctn from '../assets/images/portfolio/ctntarjeta.jpg';
import mag from '../assets/images/portfolio/magnet.jpg';
import retos from '../assets/images/portfolio/retos.png';

const Portfolio = () => {


    return ( 
        <div id="portfoliosection">
        <div>
          <h4 className="whitetitle">Proyectos</h4>
        </div>
        <div id="portfoliogallery">
          <div className="container">
            <img className="imgportfolio image" src={pPan} alt="Avatar" />
            <div className="overlay">
              <div className="text"><a href="https://www.panalerapeterpan.com/" target="blank" >Diseño de ecommerce y sitio web</a> </div>
            </div>
          </div>
          <div className="container">
            <img className="imgportfolio image" src={mag} alt="Avatar" />
            <div className="overlay">
              <div className="text">Diseño de Brochure</div>
            </div>
          </div>
          
          <div className="container">
            <img className="imgportfolio image" src={mLiz} alt="Avatar" />
            <div className="overlay">
              <div className="text"><a href="https://www.marilizcastillo.com/" target="blank">Diseño de Sitio web</a></div>
            </div>
          </div>
          <div className="container">
            <img className="imgportfolio image" src={bBeauty} alt="Avatar" />
            <div className="overlay">
              <div className="text"><a href="https://beebeauty.vercel.app/home" target="blank" >Diseño de tienda en linea</a></div>
            </div>
          </div>
          <div className="container">
            <img className="imgportfolio image" src={retos} alt="Avatar" />
            <div className="overlay">
              <div className="text"><a href="https://retosjs.netlify.app/" target="blank" >25 retos JavaScript</a></div>
            </div>
          </div>
          <div className="container">
            <img className="imgportfolio image" src={ctn} alt="Avatar" />
            <div className="overlay">
              <div className="text">Diseño de tarjetas de presentación</div>
            </div>
          </div>
        </div>
        </div>

    )
}
 
export default Portfolio;