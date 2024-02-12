import { useInView } from 'react-intersection-observer';
import './MFB.css';
import main from "../../../assets/Screenshots/MFB-main.png";
import bouquets from "../../../assets/Screenshots/MFB-bouquets.png";
import promo from "../../../assets/Screenshots/MFB-promo.png";

export const MFB = () => {
    const {ref: mfbRef, inView: isMfbInView} = useInView();

    return (
    <div className='mfb-container' ref={mfbRef}>
        <div className='overlay-mfb'>
            <div className='project-text-container'>
                <h1 className='project-title'>MFB ECOMMERCE WEBSITE</h1>
                <p 
                className='project-description'>
                    An interactive e-commerce website of the flower store which positively showcases company products
                    and enhances convenience and accessibility of purchasing process.
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
    </div>
    )
}

export default MFB;
