import React from 'react';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import slides from "./Slides.jsx";
import './slider.css'

function Slider() {
   console.log(slides)
  return (
    <div className="carousel-container">
        <div className="carousel-title">
            <h2>Mis proyectos</h2>
    </div>
       <Carousel plugins={['arrows', 'infinite','centered',]}>{slides}</Carousel>
     </div>
  )
}

export default Slider