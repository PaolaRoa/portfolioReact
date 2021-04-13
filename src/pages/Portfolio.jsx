import {React, useState} from 'react';
import '../assets/css/portfolio.css';
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
        <div id="portfolioContainer">
        <h4>Portafolio</h4>
        <div id="portfolio">
            <div id="btnLeft">
                <button className='arrow' onClick={()=>handleActive('last')} >{left}  </button>
            </div>
            <div id="pContainer">
                <div className={active===1? 'slide active': 'slide'} href="www.marilizcastillo.com">
                    <div className="project">
                        <img className="imgP" src={bBeauty} alt=""/>
                    </div>
                    <div class="overlay">
                        <div class="text"><a href="https://beebeauty.vercel.app/" target='blank'>Desarrollo de tienda en linea</a></div>
                    </div>
                </div>
                <div className={active===2? 'slide active': 'slide'}>
                <div className="project">
                    <img className="imgP" src={mLiz} alt=""/>
                    </div>
                    <div class="overlay">
                        <div class="text"><a href="https://www.marilizcastillo.com/" target='blank'>Desarrollo de sitio web y tienda en linea</a></div>
                    </div>
                </div>
                <div className={active===3? 'slide active': 'slide'}>
                <div className="project">
                        <img className="imgP" src={pPan} alt=""/>
                    </div>
                    <div class="overlay">
                        <div class="text"><a href="https://www.panalerapeterpan.com/" target='blank' >Desarrollo de sitio web y tienda en linea</a></div>
                    </div>
                </div>
                <div className={active===4? 'slide active': 'slide'}>
                <div className="project">
                        <img className="imgP" src={retos} alt=""/>
                    </div>
                    <div class="overlay">
                        <div class="text"><a href="https://retosjs-epcbohk5t.vercel.app/" target='blank'>25 retos JavaScript</a></div>
                    </div>
                </div>
                <div className={active===5? 'slide active': 'slide'}>
                <div className="project">
                        <img className="imgP" src={ctn} alt=""/>
                    </div>
                    <div class="overlay">
                        <div class="text">Diseño de tarjetas de presentación</div>
                    </div>
                </div>
                
                <div className={active===6? 'slide active': 'slide'}>
                <div className="project">
                        <img className="imgP" src={mag} alt=""/>
                    </div>
                    <div class="overlay">
                        <div class="text">Diseño de brochure</div>
                    </div>
                </div>
                </div>
            <div id='btnRight' className="btnContainer">
                <button className='arrow' onClick={()=>handleActive('next')}>{right}</button>
            </div>
        </div>
        </div>
    )
}
 
export default Portfolio;