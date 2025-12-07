import React from 'react';

import HeaderSmallInLarge from '../HeaderSmallInLarge';

import './HeaderLarge.css';

const HeaderLarge = () => {
  const HeaderLargeBackground = () => {
    return (
      <div className="HeaderLargeBackground"></div>
    )
  }

  return (
    <div className="HeaderLarge">
      <HeaderLargeBackground />
      <HeaderSmallInLarge />
      <div className="Text-MainTitle">
        <p>James Bungay</p>
      </div>
      <div className="LRmargin1rem">
        <div className="Text-Header">
          <p>Software Engineer at the BBC.</p>
          <p>University of Manchester <a className={"HeroLink"} href={"https://www.grammarly.com/blog/alumna-alumnae-alumni-alumnus/"} target={"_blank"}>alum</a>, with a <a className={"HeroLink"} href={"https://pubmed.ncbi.nlm.nih.gov/38083026/"} target={"_blank"}>published dissertation</a>.</p>
          <p>Interested in environmentally sustainable software, health tech, iOS apps, and home IoT.</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderLarge;
