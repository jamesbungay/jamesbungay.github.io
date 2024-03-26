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
            Contactless Hand Tremor Amplitude Measurement using Smartphones
            </p>
            <p className="Text-Paragraph">
            A paper summarising my university dissertation, where I developed a method to measure the amplitude of Parkinson's hand tremors. Tremor amplitude is measured using a computer vision analysis of data from a smartphone's built in depth sensor and camera.
            </p>
            <p className="Text-Paragraph">
            The paper was subsequently published and accepted to the 2023 Conference of the IEEE Engineering in Medicine and Biology Society.
            </p>
            <a className="Text-Paragraph-Link" href="https://pubmed.ncbi.nlm.nih.gov/38083026/" target={"_blank"}>Read on PubMed</a>
            \&nbsp;&nbsp;<a className="Text-Paragraph-Link" href="https://doi.org/10.48550/arXiv.2304.14937" target={"_blank"}>Read on arXiv (no login required)</a>
            \&nbsp;&nbsp;<a className="Text-Paragraph-Link" href="https://github.com/jamesbungay/cv-tremor-amplitude" target={"_blank"}>Code on GitHub</a>
          </div>
        }
        imageObj={
          <img alt="Icon of the first page of the paper."
               src={require("../../assets/portfolio_dissertation.png")}
               className="PortfolioImage" />
        }
      />
      <br></br>
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
            <a className="Text-Paragraph-Link" href="https://github.com/jamesbungay/CarbonCamera" target={"_blank"}>Code on GitHub</a>
            \&nbsp;&nbsp;<a className="Text-Paragraph-Link" href="https://youtu.be/yVFjdLtYHbE" target={"_blank"}>10 second video demo</a>
          </div>
        }
        imageObj={
          <img alt="CarbonCamera app shown on two iPhones"
               src={require("../../assets/portfolio_carboncamera.png")}
               className="PortfolioImage" />
        }
      />

      <br />
      <p className="Text-Paragraph">Find more projects on <a className={"Text-Paragraph-Link-NoEmphasis"} href="https://github.com/jamesbungay" target={"_blank"}>GitHub</a>.</p>
      <p className="Text-Paragraph">Read more about my experience on <a className={"Text-Paragraph-Link-NoEmphasis"} href="https://www.linkedin.com/in/james-bungay/" target={"_blank"}>LinkedIn</a>.</p>
      <p className="Text-Paragraph">Email me at <a className={"Text-Paragraph-Link-NoEmphasis"} href="mailto:james@jamesjam.es">james@jamesjam.es</a>.</p>
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
            <a className="Text-Paragraph-Link" href="mailto:james@jamesjam.es?subject=Meteor%20Java%20game%20source%20code">Request Source Code</a>
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
