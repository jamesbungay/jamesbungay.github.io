import React from 'react';
import './App.css';

function HeaderBar() {
  return (
    <div className="HeaderBar">
      <div className="HeaderTitle">
        <div className="Text-Header">
          James Bungay | jamesjam.es
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
        <p>Computer science student and professional Jägerbomber at the University of Manchester, whose current focus is in iOS app development. My current aspiration is to complete an internship in this or a similar field, with the intention of beginning a career in the field. [PUT IN SEPARATE CAREER ASPIRATION SECTION BEFORE PORTFOLIO ITEMS]</p>
        </div>
      </div>
    </div>
  )
}



function PortfolioItemDesc() {
  return (
    <div className="PortfolioItem-Desc">
      <div className="Text-SubTitle">
      CarbonCamera - iOS App
      </div>
      <div className="Text-Paragraph">
        Take a photo of a food or drink to see its carbon footprint!<br />
        CarbonCamera is an iOS app which shows the carbon footprint of food or drinks, detected in a photo using the ResNet50 neural network.
        Take a photo of your snack or meal and compare its carbon emissions to other suggested foods.
      </div>
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
    </div>
  );
}

export default App;
