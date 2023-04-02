import React from 'react';
import { Contact } from '../models/contact.class';
import ContactComponent from '../pure/contact';


const ContactList = () => {

    const defaultContact= new Contact('María', 'LLanes','mllanes@hotmail.com', false)

    return (
        <div>
            <h1>

                <ContactComponent contact={ defaultContact }>
                </ContactComponent> 
                
            </h1>
        </div>
    );
};


export default ContactList;
