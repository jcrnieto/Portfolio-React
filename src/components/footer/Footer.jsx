import React from 'react';
import './footer.css';
import {FaWhatsapp} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
       <div className="footer-info">
         <div className="email">
           <a href="https://jcrnietos@gmail.com" target="_blank" rel="noreferrer">
               <i className="icon-gmail"><FaEnvelope size={35}/></i>
           </a>
           <p>jcrnietos@gmail.com</p>
         </div>
           <p>Córdoba-Argentina</p>
        </div>
        <div className="footer-contact">
            <h3>Contáctame</h3>
            <p>Y pongamos manos a la obra</p>
        </div>
        <div className="footer-sns">
            <div className="design-by">
                Diseñado por Juan Cruz Nieto
            </div>
        
        <div className="sns-links">
           <a href="https://linkedin.com/in/juan-cruz-nieto-developer" target="_blank" rel="noreferrer">
               <i className="icon-linkedin"><FaLinkedin size={35}/></i>
           </a>
           <a href="https://github.com/jcrnieto" target="_blank" rel="noreferrer">
               <i className="icon-github"><FaGithub size={35}/></i>
           </a>
           <a href="https://wa.me/+543516468746" target="_blank" rel="noreferrer">
               <i className="icon-whatsapp"><FaWhatsapp size={35} /></i>
           </a>
        </div>
        </div>
    </footer>
  )
}  

export default Footer