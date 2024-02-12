import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import CV from "../../assets/CV-Olha-Fedykovych-2024.pdf"


const Footer = () => {
    return (
    <footer>
        <ul className='footer-icon-container'>
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
    </footer>
    )
}

export default Footer;