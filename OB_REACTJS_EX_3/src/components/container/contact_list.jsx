import React, { useEffect, useState } from 'react';
import { Contact } from '../models/contact.class';
import ContactComponent from '../pure/contact';
import ContactForm from '../pure/forms/contactForm';

/*
  En este ejercicio de React JS deberéis crear una lista, esta lista tendrá dentro distintos contactos 
  y deberá cumplir con las siguientes funcionalidades: Mostrar contacto. Crear contacto. Eliminar contacto. 
  Cambiar el estado del contacto entre Conectado y Desconectado.
*/

const ContactList = () => {

    const defaultContact = new Contact('María', 'LLanes', 'mllanes@hotmail.com', false)
    const defaultContact1 = new Contact('María', 'LLanes', 'mllanes@hotmail.com', false)
    const defaultContact2 = new Contact('María', 'LLanes', 'mllanes@hotmail.com', false)

    //Estado de los contactos
    const [contactos, setContactos] = useState([defaultContact, defaultContact1, defaultContact2]);

    function changeStatus(contacto){
        console.log('Change status: ', contacto)
        const index = contactos.indexOf(contacto)
        const tempContactos = [...contactos]
        tempContactos[index].conectado = !tempContactos[index].conectado

        setContactos(tempContactos)
    }

    function removeContact(contacto){
        console.log('Remove status: ', contacto)
        const index = contactos.indexOf(contacto)
        const tempContactos = [...contactos]
        tempContactos.splice(index, 1)

        setContactos(tempContactos)

        
    }

    function addContact(contacto){
        console.log('Add contacto: ', contacto)
        const tempContactos = [...contactos]
        tempContactos.push(contacto)
        setContactos(tempContactos)

    }

    useEffect(() => {

        console.log('Componente contactos list ha sido modificado')

        return () => {
            console.log('Componente contact list va a ser unmount')
        }

    }, [contactos])


    return (


            <div className="card">
                <div className="card-header p-3">
                    <h5> Tus contactos: </h5>
                </div>

                <div className="card-body" data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Correo</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Cambiar estado</th>
                                <th scope="col">Eliminar contacto </th>

                            </tr>
                        </thead>
                        <tbody>
                            {contactos.map((contacto, index)=> <ContactComponent key={index} contact={contacto} changeStatus={changeStatus} removeContact={removeContact}></ContactComponent>)}
                        </tbody>
                    </table>
                </div>
                <ContactForm add={addContact}/>
            </div>



    );
};


export default ContactList;
