import './Header.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope, faFileLines, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from '@mui/material';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logoPortfolio from '../../assets/LogoPortfolio.svg';
import logoPortfolioSmall from '../../assets/LogoPortfolioSmall.svg';
import CV from "../../assets/CV-Olha-Fedykovych-2024.pdf"

const Header = () => {
    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
    const [showHeader, setShowHeader] = useState(false);
    const [isContactOpened, setIsContactOpened] = useState(false);
    const isMobileSreens = useMediaQuery("(max-width: 599px)");

    const handleShowHeader = () => {
        if (window.scrollY > 750 ) {
            setShowHeader(false)
        } else {setShowHeader(true)}
    } 

    window.addEventListener("scroll", handleShowHeader);

    return (
    <header className= "header">
        <div className={showHeader ? "top-container" : "top-container-hidden"}></div>
            {!isMobileSreens ? (
            <div>
                <div className="menu-desktop">
                    <ul className="menu-items">
                        <li>
                            <a href="#home">home</a>
                        </li>
                        <li>
                            <a href="#about">about</a>
                        </li>
                        <li>
                            <div>
                                <img src={logoPortfolio} className="logo"></img>
                            </div>
                        </li>
                        <li>
                            <a href="#projects">projects</a>
                        </li>
                        <li>
                            <p className="header-link" onClick={() => setIsContactOpened(!isContactOpened)}>contact</p>
                        </li>
                    </ul>
                </div>
                
                <div className={isContactOpened ? "contact-container" : "contact-container-hidden"}>
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/olha-fedykovych/" target='_blank' className='link-flex'>
                                <FontAwesomeIcon icon={faLinkedin} className='fa-xl'/>
                                <p className='center-text'>Olha Fedykovych</p>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/olya-fedykovych" target='_blank' className='link-flex'>
                                <FontAwesomeIcon icon={faGithub} className='fa-xl'/>
                                <p>olya_fedykovych</p>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:feducovuch@icloud.com" target='_blank' className='link-flex'>
                                <FontAwesomeIcon  icon={faEnvelope} className='fa-xl'/>
                                <p className='center-text'>feducovuch@icloud.com</p>
                            </a>
                        </li>
                        <li>
                            <a href={CV} target='_blank' className='link-flex'>
                                <FontAwesomeIcon  icon={faFileLines} className='fa-xl cv-icon'/>
                                <p className='center-text'>View my CV</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            ) : (
            <div className='header-mobile'> 
                <div className="logo-container-mobile">
                    <img src={logoPortfolioSmall} className="logo"></img>
                </div>
                <button
                    onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
                    <FontAwesomeIcon icon={faBars} className="fa-xl" />
                </button>
            </div>
        )}
        

        {isMobileSreens && isMobileMenuToggled && (
            <div>
                <div className="menu-mobile">
                    <img src={logoPortfolioSmall} className="logo"></img>
                    <div className="exit-btn">
                        <button
                            onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                        >
                        <FontAwesomeIcon icon={faXmark} className="fa-xl" />
                        </button>
                    </div>

                    <ul className="menu-items-mobile">
                        <li>
                            <a href="#home">home</a>
                        </li>
                        <li>
                            <a href="#about">about</a>
                        </li>
                        <li>
                            <a href="#projects">projects</a>
                        </li>
                        <li>
                            <div className='contact-mobile'>
                                <a href="www.linkedin.com/in/olha-fedykovych" target='_blank'>
                                    <FontAwesomeIcon icon={faLinkedin} className='fa-xl'/>
                                </a>
                                <a href="https://github.com/olya-fedykovych" target='_blank'>
                                    <FontAwesomeIcon icon={faGithub} className='fa-xl'/>
                                </a>
                                <a href="mailto:feducovuch@icloud.com" target='_blank'>
                                    <FontAwesomeIcon icon={faEnvelope} className='fa-xl'/>
                                </a>
                                <a href={CV} target='_blank'>
                                    <FontAwesomeIcon icon={faFileLines} className='fa-xl'/>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            )
        }
    </header>
    )
}

export default Header;