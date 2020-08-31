import React, { Component } from "react"
import { Link } from "react-scroll";

import HamburgerButton from "./HamburgerButton";
import HamburgerMenu from "./HamburgerMenu"
import hamburgerMenu from "./HamburgerMenu";

class Nav extends Component {
    state={
      hamburgerMenuOpen: false
    }

    hamburgerClickHandler = () => {
      this.setState((prevState) => {
        return {hamburgerMenuOpen: !prevState.hamburgerMenuOpen}
      })
    }

    closeClickHandler = () => {
      this.setState({hamburgerMenuOpen: false})
    }
    render() {
      let hamburgerMenu

      if (this.state.hamburgerMenuOpen) {
        hamburgerMenu = <HamburgerMenu click={this.closeClickHandler}/>
      }
      return (
          <header className="menubar">
            <nav className="navbar" id="navbar">
              <div>
                <HamburgerButton hamburgerClickHandler={this.hamburgerClickHandler}/>
                {hamburgerMenu}
              </div>
              <div className="navlogo">RIKKE SIMONE JORGENSEN</div>
                <div className="spacer" />
                <div className="navbar-items">
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