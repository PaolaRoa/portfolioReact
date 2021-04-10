import React from 'react';
import Header from '../components/Header';
import '../assets/css/home.css';
import Footer from '../components/Footer';


const Home = () => {
    return (  
        <>
        <div id="bienvenida">
            <h1>Hola,<br />Soy Paola Roa</h1>
            <h2 class="blur">Desarrolladora Web</h2>
        </div>
        <Footer />
        </>
    );
}
 
export default Home;