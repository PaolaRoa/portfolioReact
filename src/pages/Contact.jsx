import React from 'react';
import{ init } from 'emailjs-com';
import * as emailjs from 'emailjs-com';
init("user_aAfp4062AmlS3zCsrNrnK");

var templateParams = {
    name: 'James',
    notes: 'Check this out!'
};
 

const Contact = () => {
    function sendEmail(e){
        e.preventDefault();
       /* emailjs.send('portfoliopage', 'template_idfq4ap', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });*/
    
        emailjs.sendForm('portfoliopage', 'template_idfq4ap', e.target, 'user_aAfp4062AmlS3zCsrNrnK')
          .then((result) => {
              console.log("enviado");
          }, (error) => {
              console.log("no se pudo enviar");
          });
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
                        <span><i class="fa fa-building"></i>Bogotá, Colombia</span><br />
                    </div>
                    <div class="mi-dato">
                        <span class="mi-dato"><a href="https://wa.me/573214845851" target="blank"><i class="fab fa-whatsapp"></i>  +57 321 484 5851</a></span><br />
                    </div>
                    <div class="mi-dato">
                        <span><a
                            href="mailto:e.creativo.a@gmail.com"><i class="fa fa-envelope"></i>  e.creativo.a@gmail.com</a></span>
                    </div>
                </address>
            </div>

            </div>

        </div>
     );
}

export default Contact;