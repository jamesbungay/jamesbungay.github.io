import React from 'react';

import './FooterBar.css';

const FooterBar = () => {
  const FooterBackground = () => {
    return (
      <div className="FooterBackground"></div>
    );
  };

  return (
    <div className="FooterBar">
      <FooterBackground />
      <div className="Text-Footer">
        jamesjam.es is <a className="Text-Footer-Link" href="https://github.com/jamesbungay/jamesbungay.github.io">open source</a>. Designed from scratch by James Bungay.
      </div>
    </div>
  );
};

export default FooterBar;
