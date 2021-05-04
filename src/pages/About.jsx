import React from 'react';
import '../assets/css/about.css';
import fotoPerfil from '../assets/images/fotoperfil-100.jpg';
import CV from '../assets/HojadeVida.pdf'
import Footer from '../components/Footer.jsx';

const About = () => {
    return ( 
    <div id="about-me" className="section">
        <div className="bio">
            <div>
                <img src={fotoPerfil} className="fotoredonda" alt="Foto de perfil" />
            </div>
            <div>
            <h4 id="aboutTitle">Sobre mí</h4>
                <p>
                Estoy en constante proceso de aprendizaje, actualmente soy aprendiz SENA en el entorno del desarrollo de software, me
                interesa y me apasiona la programación, el desarrollo de sitios web, así como el diseño de piezas gráficas y el marketing digital.
                Me considero una persona creativa y con habilidades para la resolución de problemas,
               me encanta aportar mis habilidades a
                los proyectos en los que me involucro, dejando lo mejor de mi mientras adquiero nuevos conocimientos y mejoro mis habilidades.
                Actualmente me encuentro cursando Análisis y Desarrollo de Sistemas de Información en el SENA y realizando el bootcamp de desarrollo fullstack "prográmate" becada por la fundación Educamas y Simplon.
            </p>
    
                <a href={CV}  download="CVPaolaRoa">
                    <button  className="actionBtn">
                        Descarga mi CV
                    </button>
                </a>

        </div>
        </div>
       
        
      </div>
    
     );
}
 
export default About;