import React from 'react';
import "./about.css";
import fotoPerfil from "../../media/fotoPerfil.jpg";
import ReactToPdf from 'react-to-pdf';
import CV from '../../media/CV.pdf';

function About() {
 const ref = React.createRef();

  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>A cerca de mi</h3>
        <p>
          Soy Técnico Superior Mecatrónico y me encuentro sumergiéndome al mundo
          del Desarrollo Web. Mi objetivo principal es seguir aprendiendo y
          especializándome en el rubro. Me gusta estar capacitándome
          continuamente.
        </p>
        
          <a href={CV} download>
            descargar CV
          </a>
       
      </div>
      <div className="about-img">
        <img src={fotoPerfil} alt="about" />
      </div>
    </div>
  );
}

export default About