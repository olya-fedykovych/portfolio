import { useInView } from 'react-intersection-observer';
import './Hero.css';

const Hero = () => {
    const {ref: heroRef, inView: isHeroInView} = useInView();

    return (
    <section className="hero" id='home' ref={heroRef}>
        <div className="overlay-hero">
            <h1 className={isHeroInView ? "heading-main heading-main-animate" : "heading-main"}>olya | fedykovych</h1>
            <div className="separator"></div>
            <p 
            className={isHeroInView ? "description-main description-main-animate" : "description-main"}>
                A Front End Developer driven by passion for creating distinctive and functional user interfaces.
                My primary focus is implementing user-centric web applications which align with company and user requirements.
                To achieve this aim, I leverage technologies including <span className='text-bold'>JavaScript</span>, <span className='text-bold'>React</span>, <span className='text-bold'>Redux</span>, <span className='text-bold'>CSS/Sass</span> and <span className='text-bold'>Node.js/Express</span>. 
                Actively seeking career opportunities within a company with shared values and objectives
                in the vibrant city of <span className='text-bold'>Stockholm, Sweden</span>.
            </p>
        </div>
    </section>
    )
}

export default Hero;