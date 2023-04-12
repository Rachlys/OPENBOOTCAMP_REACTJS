import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactForm = ({add}) => {

    
    const nombreRef = useRef('')
    const apellidoRef = useRef('')
    const emailRef = useRef('')


    function crearContacto(e){
        e.preventDefault()
        const newContacto = new Contact(nombreRef.current.value, apellidoRef.current.value, emailRef.current.value, false )
        add(newContacto)  
    }

    return (
        <form onSubmit={crearContacto} className='d-flex justify-content-center align-items-center mb-4'>

        <div className="form-group">
            <label htmlFor="inputNombre">Nombre contacto</label>
            <input ref={nombreRef} type="text" className="form-control" id="inputNombre" placeholder="Nombre"/>
        </div>
        <div className="form-group">
            <label htmlFor="inputApellido">Apellido contacto</label>
            <input ref={apellidoRef} type="text" className="form-control" id="inputApellido" placeholder="Apellido"/>
        </div>
        <div className="form-group">
            <label htmlFor="inputEmail">Email contacto</label>
            <input ref={emailRef} type="email" className="form-control" id="inputEmail" placeholder="Email"/>
        </div>

        <button type="submit" className="btn btn-primary">Enviar contacto</button>
        </form>
    );
}

ContactForm.protoTypes={
    add : PropTypes.func.isRequired
}
export default ContactForm;
