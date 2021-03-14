import React from 'react';

import HeaderSmall from '../../../../components/HeaderSmall';

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
      <HeaderSmall />
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
  );
};

export default HeaderLarge;
