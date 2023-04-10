import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Contact} from '../models/contact.class'

const ContactComponent = ({ contact }) => {
    
    const [conectado, setConectado] = useState(false)

    const changeConectado = () =>{
        if(conectado === false){
            setConectado( true )
        }else{
            setConectado( false )
        }
    }

    return (
        <div>
                <h2>Contacto : { contact.nombre } { contact.apellido }</h2>
                <h3> Email : { contact.email }</h3>
                <h4> { conectado ? 'Contacto en linea' : 'Contacto desconectado'} </h4>
                <button onClick={changeConectado}> Change status </button>
        </div>
    );
};


ContactComponent.propTypes = {
    contact : PropTypes.instanceOf(Contact)
};


export default ContactComponent;
