/*import img1 from '../../media/img1.png'
import img2 from '../../media/img2.png'
import img3 from '../../media/img3.png'*/
import './slider.css'

const slidesInfo = [
    {
        src:"https://i.ibb.co/9HgSZ8z/pi-food-formulario.png",
        alt:"proyecto1",
        desc:"pi-food-gv1k8m707-jcrnieto.vercel.app"
    },
    {
        src:"https://i.ibb.co/ykLFMW6/portfolio-pi-detail.png",
        alt:"proyecto2",
        desc:"pi-food-gv1k8m707-jcrnieto.vercel.app"
    },
    {
        src:"https://i.ibb.co/4P2WfnS/portfolio-pi-home.png",
        alt:"proyecto3",
        desc:"pi-food-gv1k8m707-jcrnieto.vercel.app"
    }
]

const slides = slidesInfo.map(el => (
    <div className="slider-container">
        <img src={el.src} alt={el.alt}/>
        <div className="slide-desc">
            <span><a href={el.desc} target="_blank">{el.desc}</a></span>
        </div>
    </div>
))

export default slides;
