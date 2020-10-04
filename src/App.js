import React from 'react';
import './App.css';

function HeaderBar() {
  return (
    <div className="HeaderBar">
      <div className="HeaderTitle">
        <div className="Text-Header-MiniTitle">
          jamesjam.es
        </div>
      </div>
      <div className="HeaderSocial">
      <SocialLinks />
      </div>
    </div>
  )

}

function SocialLinks() {
  return (
    <div className="SocialLinks">
      <a href="https://github.com/jamesbungay">
        <img alt="GitHub"
             src={require("./social_github.png")}
             className="SocialButton" />
      </a>
      <a href="mailto:james.bungay@icloud.com">
        <img alt="Email"
             src={require("./social_email.png")}
             className="SocialButton" />
      </a>
      <a href="https://www.linkedin.com/in/james-bungay/">
        <img alt="LinkedIn"
             src={require("./social_linkedin.png")}
             className="SocialButton" />
      </a>
    </div>
  )
}

function HeaderLargeBackground() {
  return (
    <div className="HeaderLargeBackground"></div>
  )
}

function HeaderLarge() {
  return (
    <div className="HeaderLarge">
      <HeaderLargeBackground />
      <HeaderBar />
      <div className="Text-MainTitle">
        <p>James Bungay</p>
      </div>
      <div className="LRmargin1rem">
        <div className="Text-Header">
        <p>A computer science student at the University of Manchester, whose current focus is on iOS app development. I am looking for an internship in front-end software development, with the aspiration to begin a career in the field when I complete my studies in 2022.</p>
        </div>
      </div>
    </div>
  )
}



function PortfolioItemDesc() {
  return (
    <div className="PortfolioItem-Desc">
      <p className="Text-SubTitle">
      CarbonCamera<br />iOS App
      </p>
      <p className="Text-Paragraph">
        Take a photo of your food or drink to see its carbon footprint!
      </p>
      <p className="Text-Paragraph">
        CarbonCamera is an iOS app which shows the carbon footprint of food or drinks, detected in a photo using the ResNet50 neural network.
        Take a photo of your snack or meal using the app to see its carbon emissions, and compare its environmental impact to other similar suggested foods.
      </p>
      <p className="Text-Paragraph">
        Written in the Swift language, making use of UIKit and CoreML.
      </p>
      <a className="Text-Paragraph-Link" href="https://github.com/jamesbungay/CarbonCamera">GitHub</a>
      <a className="Text-Paragraph-Link" href="https://youtu.be/yVFjdLtYHbE">10 second video demo</a>
    </div>
  )
}

function PortfolioItemImage() {
  return (
    <div className="PortfolioItem-Image">
      <img alt="GitHub"
           src={require("./portfolio_carboncamera.png")}
           className="PortfolioImage" />
    </div>
  )
}

function PortfolioItem() {
  return (
    <div className="PortfolioItem">
    <PortfolioItemDesc />
    <PortfolioItemImage />
    </div>
  )
}



function FooterBackground() {
  return (
    <div className="FooterBackground"></div>
  )
}

function FooterBar() {
  return (
    <div className="FooterBar">
      <FooterBackground />
      <div className="Text-Footer">
        jamesjam.es is <a className="Text-Footer-Link" href="https://github.com/jamesbungay/jamesbungay.github.io">open source</a>. Designed from scratch by James Bungay.
      </div>
    </div>
  )
}



function App() {
  return (
    <div className="App">
      <HeaderLarge />
      <br /><br /><br /><br /><br /><br />
      <PortfolioItem />
      <PortfolioItem />
      <br />
      <FooterBar />
    </div>
  );
}

export default App;
