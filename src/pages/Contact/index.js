import React from 'react';
import Title from "../common/Title";
import ContactForm from "./Form";

const Contact = () => {
    return (
        <div className="page" id="contact">
            <Title>
                Contact Me
            </Title>
            <ContactForm/>
        </div>
    );
};

export default Contact;
