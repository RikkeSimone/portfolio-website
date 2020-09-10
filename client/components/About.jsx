import React, { Component } from 'react'

class About extends Component {
    state = {}
    render () {
        return <div className='about-container' id="about">
          <div className="aboutheader">
            <h2>Kia Ora, Hello, Hej!</h2>
          </div>
          <div className="aboutall">
          <div className="aboutcontent">
            <p>Welcome to not only my online portfolio, but also my wee online playground I continue to develop and 
              experiment with!</p>

             <p>My name is Rikke and I am a trained full stack web developer. Web development has been an interest 
              of mine for years, which finally pushed me to transition into tech this year, 
              turning my hobby into a full time career. 
            
            <p>Commended for being approachable and caring within a team environment, as well as being extremely 
              forward thinking and always developing new ideas, I aim towards providing solutions which benefit my clients
              and colleagues alike.
            </p> 
            
            <p>I am always seeking new challenges and interesting projects to work on within an agile team environment, 
              while offering a supportive and caring team member with a love for problem solving and a thirst for 
              continued development.</p>

            <p>Feel free to contact me with any queries you might have. Whether if you're an employer seeking 
              a long term web developer or a client who is in dire need of a website, I am here to help.</p>

              <h3>Skills, Strenghts and Attributes includes</h3>
            <ul>
              <li>Git/GitHub</li>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>Node.js, Express.js</li>
              <li>React.js/Redux/Redux Thunk</li>
              <li>RESTful JSON API’s.</li>
              <li>Jest/manual testing/Cypress E2E automated testing tool</li>
              <li>Microsoft Office</li>
            </ul>  
            </p>
          </div>
          </div>
      </div>
    } 
}

export default About