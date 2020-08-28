import React, { Component } from "react";

import Nav from "./Nav";
import { Link, animateScroll as scroll } from "react-scroll";
import Skills from "./Skills";
import Summary from "./Summary";
import Experience from "./Experience";
import Education from "./Education";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Summary />
        <Skills />
        <Experience />
        <Education />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;