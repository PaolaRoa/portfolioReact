import React from 'react';
import '../assets/css/about.css';
import fotoPerfil from '../assets/images/fotoperfil-100.jpg';
import Footer from '../components/Footer.jsx';

const About = () => {
    return ( 
    <div id="about-me" className="section">
        <div className="bio">
            <div>
                <img src={fotoPerfil} className="fotoredonda" alt="Foto de perfil" />
            </div>
            <div>
            <h4>Sobre mí</h4>
                <p>
                Estoy en constante proceso de aprendizaje en el entorno del desarrollo web, me
                interesa y me apasiona la programación y el diseño de sitios web funcionales y
                agradables, así como el diseño de piezas gráficas y el marketing digital.
                Me considero una persona creativa, puedo aportar mi creatividad y mis habilidades a
                los proyectos en los que me involucro, dejando lo mejor de mi y velando por la
                mejora constante.
            </p>
        </div>
        </div>
        <Footer />
       
        
      </div>
    
     );
}
 
export default About;