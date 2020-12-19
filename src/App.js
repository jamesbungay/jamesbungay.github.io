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
        <p>A computer science student at the University of Manchester.</p>
        <p>Student representative and ambassador.</p>
        </div>
      </div>
    </div>
  )
}



function PortfolioItemDesc(props) {
  return (
    <div className="PortfolioItem-Desc">
      {props.bodyContent}
    </div>
  )
}

function PortfolioItemImage(props) {
  return (
    <div className="PortfolioItem-Image">
      {props.imageObj}
    </div>
  )
}

function PortfolioItem(props) {
  return (
    <div className="PortfolioItem">
    <PortfolioItemDesc
      bodyContent={props.bodyContent}
    />
    <PortfolioItemImage
      imageObj={props.imageObj}
    />
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

      <PortfolioItem
        bodyContent={
          <div>
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
        }
        imageObj={
          <img alt="CarbonCamera app shown on two iPhones"
               src={require("./portfolio_carboncamera.png")}
               className="PortfolioImage" />
        }
      />

      <br /><p className="Text-Paragraph">More projects to be featured soon!</p>
      <br /><br />

      {/*
      <PortfolioItem
        bodyContent={
          <div>
            <p className="Text-SubTitle">
            Meteor!<br />Java Game
            </p>
            <p className="Text-Paragraph">
              A side scrolling retro-style platformer game.
            </p>
            <p className="Text-Paragraph">
              parralax backgrounds etc .... dada cross platform ... uni project
            </p>
            <p className="Text-Paragraph">
              Written in Java 11, making use of JavaFX.
            </p>
            <a className="Text-Paragraph-Link" href="mailto:james.bungay@icloud.com?subject=Meteor%20Java%20game%20source%20code">Request Source Code</a>
          </div>
        }
        imageObj={
          <img alt="Image of the Meteor! game being played"
               src={require("./portfolio_carboncamera.png")}
               className="PortfolioImage" />
        }
      />
      */}

      <br />
      <FooterBar />
    </div>
  );
}

export default App;
