import React, { Component } from "react"
import { Link } from "react-scroll";

class Nav extends Component {
    state={}
    render() {
      return (
          <header className="menubar">
            <nav className="navbar" id="navbar">
              <div></div>
              <div className="navlogo">RIKKE SIMONE JORGENSEN</div>
                <div className="spacer" />
                <div className="navbar">
                    <ul>
                        <li>
                        <Link activeClass="active" to="summary" spy={true} smooth={true} offset={0} duration= {1000}
                        >Kia Ora
                        </Link>
                        </li>
                        <li>
                        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={0} duration= {1000}
                        >Skills
                        </Link>
                        </li>
                        <li>
                        <Link activeClass="active" to="experience" spy={true} smooth={true} offset={0} duration= {1000}
                        >Experience
                        </Link>
                        </li>
                        <li>
                        <Link activeClass="active" to="education" spy={true} smooth={true} offset={0} duration= {1000}
                        >Education
                        </Link> 
                        </li>
                        <li><Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={0} duration= {1000}
                        >Portfolio
                        </Link>
                        </li>
                        <li>
                        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration= {1000}
                        >Contact
                        </Link> 
                        </li> 
                    </ul>   
                </div>
            </nav>
        </header>
      );
    }
  }

export default Nav