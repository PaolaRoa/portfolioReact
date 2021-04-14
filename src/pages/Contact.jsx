import React from 'react';

const Contact = () => {
    return (
        <div id="contact-container">
            <h4>¿Hablamos?</h4>
            <div id="contacto">
                <div id="formulario">
                    <form name="contactForm" id='contact_form' method="post" action='email.php'>

                        <div class="field-set">
                            <label for="name">Tu Nombre</label><br />
                            <input type='text' name='name' id='name' class="form-control"
                                placeholder="Elliot Alderson" />
                        </div>

                        <div class="field-set">
                            <label for="email">Tu Correo Electronico</label><br />
                            <input type='text' name='email' id='email' class="form-control"
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