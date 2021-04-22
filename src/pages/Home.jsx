import React from 'react';
import Header from '../components/Header';
import '../assets/css/home.css';
import Footer from '../components/Footer';
import About from './About';
import Skills from './Skills'
import Portfolio from './Portfolio';
import Services from './Services';
import Contact from './Contact';
import Sep from '../components/Sep';




const Home = () => {

	

    return (  
        <>
        <div id="bienvenida">
            <h1>Hola,<br />Soy Paola Roa</h1>
            <h2 className="blur">Desarrolladora de Software</h2>
        </div>

        <About />
        <Portfolio />
        <Contact />
       
       <Footer />
        </>
    );
}
 
export default Home;