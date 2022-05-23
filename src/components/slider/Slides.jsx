/*import img1 from '../../media/img1.png'
import img2 from '../../media/img2.png'
import img3 from '../../media/img3.png'*/
import './slider.css'

const slidesInfo = [
    {
        src:"https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg",
        alt:"proyecto1",
        desc:"proyecto1"
    },
    {
        src:"https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
        alt:"proyecto2",
        desc:"proyecto2"
    },
    {
        src:"https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
        alt:"proyecto3",
        desc:"proyecto3"
    }
]

const slides = slidesInfo.map(el => (
    <div className="slider-container">
        <img src={el.src} alt={el.alt}/>
        <div className="slide-desc">
            <span>{el.desc}</span>
        </div>
    </div>
))

export default slides;
