import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-info">
           <h1>Juan Cruz Nieto</h1>
           <p>Córdoba-Argentina</p>
        </div>
        <div className="footer-contact">
            <h3>Contactame</h3>
            <p>Y pongamos manos a la obra</p>
        </div>
        <div className="footer-sns">
            <div className="design-by">
                Diseño echo por Juan Cruz Nieto
            </div>
        
        <div className="sns-links">
           <a href="www.linkedin.com/in/juan-cruz-nieto-developer" target="_blank" rel="noreferrer">
               <i className="fab fa-linkedin linkedin"></i>
           </a>
           <a href="https://github.com/jcrnieto" target="_blank" rel="noreferrer">
               <i className="fab fa-github github"></i>
           </a>
        </div>
        </div>
    </footer>
  )
}

export default Footer