import React, { Component } from 'react'

class About extends Component {
    state = {}
    render () {
        return <div className='about-container' id="about">
          <div className="spacer1">
            <img src="../../images/spacer1.jpg" />
          </div>
          <div className="aboutheader">
            <h2>About me</h2>
          </div>
          <div className="aboutall">
          <div className="letterRcontainer">
          <img className="letterR" src="../../images/letterR.jpg" />
          </div>
          <div className="aboutcontent">
            <h3>Kia Ora, Hello, Hej, Aloha!</h3>
            <p>Welcome to my online portfolio and playground.</p>
            <p>I am a full stack web developer with a diverse background covering customer service and communication along with database and project management. Web development has been an interest of mine for years, which finally pushed me to transition into tech, turning my hobby into a career. 
            
            <p>Commended for being approachable and caring within a team environment, as well as being extremely forward thinking and always developing new ideas, I am always aiming to provide solutions benefitting both my team and clients.</p> 
            
            <p>I am always seeking new challenges and interesting projects to work on within an agile team environment, while offering a supportive and caring team member with a love for problem solving and a thirst for continued development.</p>
            </p>
          </div>
          </div>
      </div>
    } 
}

export default About