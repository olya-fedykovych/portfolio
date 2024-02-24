import { useInView } from 'react-intersection-observer';
import './TechStack.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareJs, faReact, faNodeJs, faGitAlt, faSass,   } from '@fortawesome/free-brands-svg-icons';


function TechStack() {
    const {ref: stackRef, inView: isStackInView} = useInView();
    const {ref: iconsRef, inView: isIconsInView} = useInView();

    return (
    <section className="tech-stack" id='about'>
        <div className="overlay" ref={stackRef}>
            <div className='animation-switch' ref={stackRef}></div>
            <div className={isStackInView ? "stack-container stack-container-animate" : "stack-container"}  ref={iconsRef}>
                <h3 className="stack-title">Tech Stack & Skills</h3>
                <div className="skills-container">
                    <div className="category-container">
                        <h4 className="category-title">Tech Stack</h4>
                        <ul className="category-list">
                            <li>JavaScript</li>
                            <li>React & Redux</li>
                            <li>GIT & Github</li>
                            <li>Node.js & Express</li>
                            <li>CSS & Sass</li>
                            <li>Webpack</li>
                            <li>Figma</li>
                        </ul>
                    </div>
                    <div className="category-container" >
                    <h4 className="category-title">Soft Skills</h4>
                        <ul className="category-list">
                            <li>Team Player</li>
                            <li>Critical Thinking</li>
                            <li>Attention To Detail</li>
                            <li>Fast Learner</li>
                            <li>Well-Organized</li>
                            <li>Adaptability</li>
                            <li>Creativity</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div className={isIconsInView ? "icon-container icon-container-animate" : "icon-container"}>
                <ul className="logo-carousel">
                    <li>
                        <FontAwesomeIcon icon={faSquareJs}  size='lg' className="icon-brand"/>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faReact} size='lg' className="icon-brand"/> 
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faNodeJs} size='lg' className="icon-brand"/> 
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faGitAlt} size='lg' className="icon-brand"/>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faSass} size='lg' className="icon-brand"/>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    ) 
}

export default TechStack;