import React from 'react';

import './PortfolioItem.css';

const PortfolioItem = props => {
  const PortfolioItemDesc = props => {
    return (
      <div className="PortfolioItem-Desc">
        {props.bodyContent}
      </div>
    );
  };

  const PortfolioItemImage = props => {
    return (
      <div className="PortfolioItem-Image">
        {props.imageObj}
      </div>
    );
  };

  return (
    <div className="PortfolioItem">
    <PortfolioItemDesc
      bodyContent={props.bodyContent}
    />
    <PortfolioItemImage
      imageObj={props.imageObj}
    />
    </div>
  );
};

export default PortfolioItem;
