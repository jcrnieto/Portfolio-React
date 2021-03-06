
import './slider.css'

const slidesInfo = [
    {
        src:"https://i.ibb.co/9HgSZ8z/pi-food-formulario.png",
        alt:"proyecto1",
        desc:"https://pi-food-snowy.vercel.app/"
    },
    {
        src:"https://i.ibb.co/ykLFMW6/portfolio-pi-detail.png",
        alt:"proyecto2",
        desc:"https://pi-food-snowy.vercel.app/"
    },
    {
        src:"https://i.ibb.co/4P2WfnS/portfolio-pi-home.png",
        alt:"proyecto3",
        desc:"https://pi-food-snowy.vercel.app/"
    },
    {
        src:"https://i.ibb.co/yfx4LRV/w.png", 
        alt:"proyecto4",
        desc:"https://frontend-peliculas.vercel.app/"
    },
    {
        src:"https://i.ibb.co/9g9b5Gf/r.png", 
        alt:"proyecto4",
        desc:"https://frontend-peliculas.vercel.app/"
    }
]

const slides = slidesInfo.map(el => (
    <div className="slider-container">
        <img src={el.src} alt={el.alt}/>
        <div className="slide-desc">
            <span><a href={el.desc} target="_blank" className='link'>Ver Proyecto</a></span>
        </div>
    </div>
))

export default slides;
