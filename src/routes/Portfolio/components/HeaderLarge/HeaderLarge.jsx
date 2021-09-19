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
        <p>A computer science student at the University of Manchester.</p>
        <p>Student representative and ambassador.</p>
        <p>Interested in web development, iOS apps and health tech.</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderLarge;
