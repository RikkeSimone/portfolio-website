import React, { Component } from "react";

import Nav from "./Nav";
import { Link, animateScroll as scroll } from "react-scroll";
import Hello from "./Hello";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Skillset from "./Skillset";
import Resume from "./Resume";
import About from "./About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Hello />
        <Portfolio />
        <About />
        <Skillset />
        <Resume />
        <Contact />
      </div>
    );
  }
}

export default App;