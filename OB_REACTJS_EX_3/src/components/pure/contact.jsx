import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Contact} from '../models/contact.class'

const ContactComponent = ({ contact , changeStatus, removeContact }) => {
    
    function statusIcon(){
        if(contact.conectado){
            return (<i className="bi bi-circle-fill" style={{color : 'green'}}></i>)
        }else{
            return (<i className="bi bi-circle-fill" style={{color : 'red'}}></i>)

        }
    }

    return (
        <tr>
            <td>{contact.nombre}</td>
            <td>{contact.apellido}</td>
            <td>{contact.email}</td>
            <td>{statusIcon()}</td>
            <td><button onClick={()=>changeStatus(contact)}> Change status </button></td>
            <td><i onClick={()=>removeContact(contact)} className='bi-trash task-action' style={{color : 'tomato', fontSize: '15px'}}></i></td>
            
        </tr>
    );
};


ContactComponent.protoTypes = {
    contact : PropTypes.instanceOf(Contact),
    changeStatus : PropTypes.func.isRequired,
    removeContact : PropTypes.func.isRequired
};


export default ContactComponent;
