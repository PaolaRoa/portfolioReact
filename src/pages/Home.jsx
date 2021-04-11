import React from 'react';
import Header from '../components/Header';
import '../assets/css/home.css';
import Footer from '../components/Footer';
import About from './About';


const Home = () => {
    return (  
        <>
        <div id="bienvenida">
            <h1>Hola,<br />Soy Paola Roa</h1>
            <h2 className="blur">Desarrolladora de Software</h2>
        </div>
        <About />
        <Footer />
        </>
    );
}
 
export default Home;