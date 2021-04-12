import {React, useState} from 'react';
import '../assets/css/portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronCircleRight, faChevronRight} from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {

    const left = <FontAwesomeIcon icon = {faChevronLeft} className="" />;
    const right = <FontAwesomeIcon icon = {faChevronRight} className="" />

    const [active, setActive] = useState(1);

    const handleActive = (direction)=>{
        if(direction === 'next'){
            if(active === 3){
                setActive(1);
            }
            else{
                setActive((active)=>active+1)}
        }
        else{
            if(active === 1){
                setActive(3)
            }
            else{
                setActive((active)=>active-1)
            }
        }
    }


    return ( 
        <>
        <h1>Portafolio</h1>
        <div id="portfolio">
            <div id="btnLeft">
                <button className='arrow' onClick={()=>handleActive('last')} >{left}  </button>
            </div>
            <div id="pContainer">
                <div className={active===1? 'slide active': 'slide'}>
                    <div className="project">
                        p1
                    </div>
                    <div className="project">  
                    p2
                    </div>
                    <div className="project">
                        p3
                    </div>
                </div>
                <div className={active===2? 'slide active': 'slide'}>
                    <div className="project">
                    p4
                    </div>
                    <div className="project">  
                    p5
                    </div>
                    <div className="project">
                    p6
                    </div>
                </div>
                <div className={active===3? 'slide active': 'slide'}>
                    <div className="project">
                        7
                    </div>
                    <div className="project">  
                    8
                    </div>
                    <div className="project">
                        9
                    </div>
                </div>
            </div>
            <div id='btnRight' className="btnContainer">
                <button className='arrow' onClick={()=>handleActive('next')}>{right}</button>
            </div>
        </div>
        </>
    )
}
 
export default Portfolio;