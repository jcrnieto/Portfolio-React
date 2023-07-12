
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
        src:"https://firebasestorage.googleapis.com/v0/b/imagenes-placeressintacc.appspot.com/o/t.png?alt=media&token=d64a4e9c-73ac-41fb-8251-e1b9494d862e", 
        alt:"proyecto4",
        desc:"https://frontend-placeressintacc.vercel.app/"
    },
    {
        src:"https://firebasestorage.googleapis.com/v0/b/imagenes-placeressintacc.appspot.com/o/y.png?alt=media&token=22660ecc-17e1-4d33-b47c-b799d9325cc6", 
        alt:"proyecto4",
        desc:"https://frontend-placeressintacc.vercel.app/"
    },
    {
        src:"https://firebasestorage.googleapis.com/v0/b/imagenes-placeressintacc.appspot.com/o/u.png?alt=media&token=50da7896-d472-4082-a8b9-d86bc9064c7d", 
        alt:"proyecto4",
        desc:"https://frontend-placeressintacc.vercel.app/"
    },
    {
        src:"https://firebasestorage.googleapis.com/v0/b/imagenes-placeressintacc.appspot.com/o/y.png?alt=media&token=22660ecc-17e1-4d33-b47c-b799d9325cc6", 
        alt:"proyecto4",
        desc:"https://frontend-placeressintacc.vercel.app/"
    },
    ,
    {
        src:"file:///C:/Users/Juan/Downloads/axy0r-0z4pu.webp", 
        alt:"proyecto4",
        desc:"https://fundacion-uno.vercel.app/"
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
