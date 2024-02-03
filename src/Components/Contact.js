import React from "react";
import "./Contact.css"; 

const Contact = () => {
    return (
        <div className="header-contact-container">
            <h2>Contact Us</h2>
            <div className="address-container">
                <p>5048 Salaoups Lane, Virginia Beach, VA 23460</p>
            </div>
            <div className="slogan-container">
                <p>Home of the Salad Tossing and Soup Slurping</p>
            </div>
            
            <div className="tossed-header-img">
                <img src="/yum-yum-imgs/contact-sppon-salad-removebg-preview.png" alt="contact-img-header" />
            </div>
          
            
            <div>Phone: (757) 497-5621</div>
            <div className="rest-name-container">
                <h2>Salaoups</h2>
            </div>
        </div>
    );
};

export default Contact;
