import React from 'react';
import { useHistory } from 'react-router-dom';  // Unused as of yet?

import HeaderLarge from './components/HeaderLarge';
import FooterBar from '../../components/FooterBar';
import PortfolioItem from './components/PortfolioItem';

import './Portfolio.css';

const Portfolio = () => {
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
               src={require("../../assets/portfolio_carboncamera.png")}
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

export default Portfolio;
