import React from 'react'

const Portfolio = () => {
        return (
        <div className='portfolio-container' id="portfolio">
          <div className="spacer">
            <img className="spacerimg" src="../../images/spacer1.jpg" />
          </div>

              <div className="content1">
                <div className="portinfo">
                <h3>Pawsome Pack Adventures</h3>
                <div className="portimgeffect">
                <img className="portfolioimg" src="../../images/portfolio/pawsomepackadventures.jpg" />
                </div><br></br>
                <p>A website for a pack walking business</p><br></br>
                <p><strong>Tech Stack:</strong> HTML, CSS, JavaScript, Node.js, React, Redux, EmailJS, SweetAlert, Cypress (E2E testing), Webpack</p>
                <br></br>
                <button className="portfoliobutton">Website</button>
                <button className="portfoliobutton">GitHub Repo</button>
                </div>
            </div>
            
            <div className="content2">
            <div className="portinfo">
                <h3>Kiwi Roadies</h3>
                <div className="portimgeffect">
                <img className="portfolioimg" src="../../images/portfolio/kiwiroadies-front.jpg" />
                </div><br></br>
                <p>An interactive roadtrip planner</p><br></br>
                <p><strong>Tech Stack:</strong> JavaScript, Node.js, Bootstrap, React, Redux, Redux Thunk, 
                  Cypress (E2E testing), Heroku, Express, Superagent, Jest, React Map GL, D3, Webpack, GitHub Actions, MapBox, Proj4</p>
                  <br></br>
                  <button className="portfoliobutton2">Website</button>
                  <button className="portfoliobutton2">GitHub Repo</button>
                  </div>
            </div>
            </div>
        )}

export default Portfolio