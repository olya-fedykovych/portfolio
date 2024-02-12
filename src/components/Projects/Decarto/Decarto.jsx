import { useInView } from 'react-intersection-observer';
import './Decarto.css';
import feedLight from "../../../assets/Screenshots/Decarto-feed-light.png";
import feedDark from "../../../assets/Screenshots/Decarto-feed-dark.png";
import loginLight from "../../../assets/Screenshots/Decarto-login-light.png";
import loginDark from "../../../assets/Screenshots/Decarto-login-dark.png";

export const Decarto = () => {
    const {ref: decartoRef, inView: isDecartoInView} = useInView();

    return (
    <div className='decarto-container' id='projects' ref={decartoRef}>
        <div className='project-text-container'>
            <h1 className='project-title'>DECARTO SO<span className='text-dark'>CIAL MEDIA</span></h1>
            <p 
            className='project-description'>
                A MERN stack social media for <span className='text-dark'>artists and creative people which</span> includes functionality, 
                such as <span className='text-dark'>authentication, authorisation and user</span> interactions(likes, following, <span className='text-dark'>creating posts, and more).</span>
            </p>
        </div>
        <div className='overlay-dark'>
            <img src={feedLight} className={isDecartoInView ? 'img-wide feed-light-img img-wide-animate' : 'img-wide feed-light-img'} alt=""/>
            <img src={loginLight} className={isDecartoInView ? 'img-thin login-light-img img-thin-animate' : 'img-thin login-light-img'} alt="" />
        </div>
        <div className='overlay-light'>
            <img src={loginDark} className={isDecartoInView ? 'img-thin login-dark-img img-thin-animate' : 'img-thin login-dark-img'} alt="" />
            <img src={feedDark} className={isDecartoInView ? 'img-wide feed-dark-img img-wide-animate' : 'img-wide feed-dark-img'} alt="" />
        </div>
        <div className='btn-container-decarto'>
            <a href="/" className='btn btn-transparent' target='_blank'>WEBSITE DEMO</a>
            <a href="https://github.com/olya-fedykovych/decarto-social-media-app" className='btn btn-filled' target='_blank'>SOURCE CODE</a>
        </div>
    </div>
    )
}

export default Decarto;
