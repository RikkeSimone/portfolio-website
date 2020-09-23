import React from 'react'

const Portfolio = () => {
        return (
        <div className='portfolio-container' id="portfolio">
          <div className="spacer">
            <img src="../../images/spacer1.jpg" />
          </div>
              <div className="content">
              <h2 className="portfolioheading">Portfolio 1</h2>
                <h3>Pawsome Pack Adventures</h3>
                <img className="portfolioimg" src="../../images/portfolio/pawsomepackadventures.jpg" />
                <p>A website for a pack walking business</p>
                <p><strong>Tech Stack:</strong> HTML, CSS, JavaScript, Node.js, React, Redux, EmailJS, SweetAlert, Cypress (E2E testing), Webpack</p>
                <button className="portfoliobutton">Website</button>
                <button className="portfoliobutton">GitHub Repo</button>
            </div>
            
            <div className="content">
            <h2 className="portfolioheading">Portfolio 2</h2>
                <h3>Kiwi Roadies</h3>
                <img className="portfolioimg" src="../../images/portfolio/kiwiroadies-front.jpg" />
                <p>An interactive roadtrip planner</p>
                <p><strong>Tech Stack:</strong> JavaScript, Node.js, Bootstrap, React, Redux, Redux Thunk, 
                  Cypress (E2E testing), Heroku, Express, Superagent, Jest, React Map GL, D3, Webpack, GitHub Actions, MapBox, Proj4</p>
                  <button className="portfoliobutton">Website</button>
                  <button className="portfoliobutton">GitHub Repo</button>
            </div>
            </div>
        )}

export default Portfolio