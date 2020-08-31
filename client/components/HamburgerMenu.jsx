import React from 'react'
import { Link } from "react-scroll";
import './Summary'

const hamburgerMenu = props => (
    <nav className="hamburger-menu">
        <div className="close-hamburger" onClick={props.click}>X</div>
        <ul>
        <li>
            <Link activeClass="active" to="summary" spy={true} smooth={true} offset={0} duration= {1000}
            onClick={props.click}>Kia Ora
            </Link>
            </li>
            <li>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={0} duration= {1000}
            onClick={props.click}>Skills
            </Link>
            </li>
            <li>
            <Link activeClass="active" to="experience" spy={true} smooth={true} offset={0} duration= {1000}
            onClick={props.click}>Experience
            </Link>
            </li>
            <li>
            <Link activeClass="active" to="education" spy={true} smooth={true} offset={0} duration= {1000}
            onClick={props.click}>Education
            </Link> 
            </li>
            <li><Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={0} duration= {1000}
            onClick={props.click}>Portfolio
            </Link>
            </li>
            <li>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration= {1000}
            onClick={props.click}>Contact
            </Link> 
            </li> 
        </ul>
    </nav>

)

export default hamburgerMenu