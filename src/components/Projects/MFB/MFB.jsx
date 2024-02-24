import { useInView } from 'react-intersection-observer';
import './MFB.css';
import main from "../../../assets/Screenshots/MFB-main.png";
import bouquets from "../../../assets/Screenshots/MFB-bouquets.png";
import promo from "../../../assets/Screenshots/MFB-promo.png";

export const MFB = () => {
    const {ref: mfbRef, inView: isMfbInView} = useInView();

    return (
    <section className='mfb-container' ref={mfbRef}>
        <div className='overlay-mfb'>
            <div className='project-text-container'>
                <h1 className='project-title'>MFB ECOMMERCE WEBSITE</h1>
                <p 
                className='project-description'>
                    A dynamic mobile-friendly online platform for the flower store that effectively highlights the company's products 
                    and maintains brand consistency. The application incorporates essential e-commerce features, 
                    enhancing the convenience of purchasing experience.


                </p>
            </div>
                <img src={main} className={isMfbInView ? 'main-img main-img-animate' : 'main-img'} alt="MFB image main"/>
                <img src={promo} className='promo-img' alt="MFB image promo" />
                <img src={bouquets} className={isMfbInView ? 'bouquets-img bouquets-img-animate' : 'bouquets-img'} alt="MFB image bouquets" />
            <div className='btn-container-mfb'>
                <a href="/" className='btn btn-filled' target='_blank'>WEBSITE DEMO</a>
                <a href="https://github.com/olya-fedykovych/MFB-flower-boutique-ecommerce" className='btn btn-transparent' target='_blank'>SOURCE CODE</a>
            </div>
        </div>
    </section>
    )
}

export default MFB;
