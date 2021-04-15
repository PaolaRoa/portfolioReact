import React from 'react';
import{ init } from 'emailjs-com';
import * as emailjs from 'emailjs-com';
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {faMapMarker, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/contact.css';
init("user_aAfp4062AmlS3zCsrNrnK");



const Contact = () => {

    const waIcon = <FontAwesomeIcon icon ={faWhatsapp} className="iC" status/>;
    const mail = <FontAwesomeIcon icon ={faEnvelope} className="iC" status/>;
    const map = <FontAwesomeIcon icon ={faMapMarker} className="iC" status/>;



    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('portfoliopage', 'template_idfq4ap', e.target, 'user_aAfp4062AmlS3zCsrNrnK')
          .then((result) => {
              console.log("enviado");
             cleanForm();
              swal("enviado", "¡pronto responderé a tu mensaje!", "success");
          }, (error) => {
              console.log("no se pudo enviar");
              swal("...ups!", "se solto una tuerca y tu mensaje no se envio", "success");
          });
      }

      const cleanForm = ()=>{
        const inputs= document.getElementsByTagName('input');
        const text= document.getElementsByTagName('textarea');
        console.log(text)
        for(let input of inputs){
            console.log(input.value);
            if (input.type ==='text' || input.type ==='textarea'){
                input.value = "";
            }
            
        }
      }

    return (
        <div id="contact-container">
            <h4>¿Hablamos?</h4>
            <div id="contacto">
                <div id="formulario">
                    <form name="contactForm" onSubmit={sendEmail}>

                        <div class="field-set">
                            <label for="from_name">Tu Nombre</label><br />
                            <input type='text' name='from_name' id='name' class="form-control"
                                placeholder="Elliot Alderson" />
                        </div>

                        <div class="field-set">
                            <label for="reply_to">Tu Correo Electronico</label><br />
                            <input type='text' name='reply_to' id='email' class="form-control"
                                placeholder="elliotalderson@protonmail.ch" />
                        </div>

                        <div class="field-set">
                            <label for="phone">Tu Teléfono</label><br />
                            <input type='text' name='phone' id='phone' class="form-control"
                                placeholder="(212) 555-0179" />
                        </div>

                        <div class="field-set">
                            <label for="message">¿Qué quieres decirme?</label><br />
                            <textarea name='message' id='message' class="form-control"
                                placeholder="¡Hola, Me encanta tu pagina!"></textarea>
                        </div>

                        <div class="spacer-half"></div>

                        <div id='submit'>
                            <input type='submit' id='Enviar' value='Enviar' class="btn-mio" />
                        </div>
                    </form>
                </div>
                <div id="direccion">
                <address>
                    <div class="mi-dato">
                        <span>{map}Bogotá, Colombia</span><br />
                    </div>
                    <div class="mi-dato">
                        <span class="mi-dato"><a href="https://wa.me/573214845851" target="blank">{waIcon}  +57 321 484 5851</a></span><br />
                    </div>
                    <div class="mi-dato">
                        <span><a
                            href="mailto:e.creativo.a@gmail.com">{mail}e.creativo.a@gmail.com</a></span>
                    </div>
                </address>
            </div>

            </div>

        </div>
     );
}

export default Contact;