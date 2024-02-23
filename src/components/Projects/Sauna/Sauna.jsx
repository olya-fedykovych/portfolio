import { useInView } from 'react-intersection-observer';
import './Sauna.css';
import main from "../../../assets/Screenshots/Sauna-main.png";
import booking from "../../../assets/Screenshots/Sauna-booking.png";
import promo from "../../../assets/Screenshots/Sauna-promo.png";

export const Sauna = () => {
    const {ref: saunaRef, inView: isSaunaInView} = useInView();

    return (
    <div className='sauna-container' ref={saunaRef}>
        <div className='overlay-sauna'>
            <div className='project-text-container'>
                <h1 className='project-title'>THE BIRCH SAUNA</h1>
                <p 
                className='project-description'>
                    A fully-responsive website designed to showcase comprehensive information about services offered by the company. 
                    The platform incorporates functionality which enables users to schedule appointments with ease, 
                    thereby enhancing overall customer experience.
                </p>
            </div>
                <img src={main} className='main-sauna-img' alt=""/>
                <img src={promo} className={isSaunaInView ? 'promo-sauna-img promo-sauna-img-animate' : 'promo-sauna-img'} alt="" />
                <img src={booking} className={isSaunaInView ? 'booking-sauna-img booking-sauna-img-animate' : 'booking-sauna-img'} alt="" />
            <div className='btn-container-sauna'>
                <a href="/" className='btn btn-transparent' target='_blank'>WEBSITE DEMO</a>
                <a href="https://github.com/olya-fedykovych/the-birch-sauna-website" className='btn btn-filled' target='_blank'>SOURCE CODE</a>
            </div>
        </div>
    </div>
    )
}

export default Sauna;