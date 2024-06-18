import "../styles/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
    return (
        <div id="contact" className="content-container contact-container-div">
            <ul className="contact-container grid grid-rows-2 grid-gap-4">
                <div className="contact-header row-start-1">
                    <h1>Contact</h1>
                </div>
                <div className="row-start-2 flex flex-wrap flex-row gap-20 justify-center">
                    <li className="contact-container">
                        <a href="mailto:tatukristian@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} fixedWidth size="3x" />
                        </a>
                    </li>
                    <li className="contact-container">
                        <a href="https://www.linkedin.com/in/pulkkinentatu" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} fixedWidth size="3x" />
                        </a>
                    </li>
                    <li className="contact-container">
                        <a href="https://github.com/tatukristiani" target="_blank">
                            <FontAwesomeIcon icon={faGithub} fixedWidth size="3x" />
                        </a>
                    </li>
                </div>
            </ul>
        </div>
    );
}
