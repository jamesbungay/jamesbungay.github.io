import React from 'react';
import { useHistory } from 'react-router-dom';  // Unused as of yet?

import HeaderSmall from '../../components/HeaderSmall';
import FooterBar from '../../components/FooterBar';

import './NotFound.css';

const NotFound = () => {
  return (
    <div className="NotFound">
      <HeaderSmall />
      <div className="mainContent">
        <h1>Page not found!</h1>
        <p>There doesn't appear to be a page at the URL you requested :(</p>
      </div>
    </div>
  );
}

export default NotFound;
