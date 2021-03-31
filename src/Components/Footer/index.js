import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebookSquare, faInstagramSquare, faPinterestSquare } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import  Logo  from "../../assets/images/Logo.jpg"
import "../../css/footer.css"


const Footer = () => {
    return(
        <footer>
            <section className="footer_section">
            <div className="footer_logoes">
                <figure className="logo">
                    <img src={Logo}></img>
                </figure>
                <div className="socialIcon">
                    <a href="https://www.facebook.com/">
                        <FontAwesomeIcon className="icon" icon={faFacebookSquare} size="2x"/>
                    </a>
                    <a href="https://twitter.com/">
                        <FontAwesomeIcon icon={faTwitterSquare} size="2x"/>
                    </a>
                    <a href="https://www.instagram.com/">
                        <FontAwesomeIcon icon={faInstagramSquare} size="2x"/>
                    </a>
                    <a href="https://in.pinterest.com/">
                        <FontAwesomeIcon icon={faPinterestSquare} size="2x"/>
                    </a>
                    
                </div>
            </div>
                
                <span className="copyright">All Rghts Resurved <FontAwesomeIcon icon={ faCopyright }/>. Lucious 2021</span>
            </section>
        </footer>
    )
}

export default Footer;