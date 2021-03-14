import React from 'react';

import './HeaderSmallInLarge.css';

const HeaderSmallInLarge = () => {
  const SocialLinks = () => {
    return (
      <div className="SocialLinks">
        <a href="https://github.com/jamesbungay">
          <img alt="GitHub"
               src={require("../../../../assets/social_github.png")}
               className="SocialButton" />
        </a>
        <a href="mailto:james.bungay@icloud.com">
          <img alt="Email"
               src={require("../../../../assets/social_email.png")}
               className="SocialButton" />
        </a>
        <a href="https://www.linkedin.com/in/james-bungay/">
          <img alt="LinkedIn"
               src={require("../../../../assets/social_linkedin.png")}
               className="SocialButton" />
        </a>
      </div>
    );
  };

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
  );
};

export default HeaderSmallInLarge;
