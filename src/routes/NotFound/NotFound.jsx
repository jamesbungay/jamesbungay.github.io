import React from 'react';
import { useHistory } from 'react-router-dom';  // Unused as of yet?

import HeaderSmall from '../../components/HeaderSmall';

import './NotFound.css';

const NotFound = () => {
  return (
    <div className="App">
      <HeaderSmall />
      <p>Page not found! There doesn't appear to be a page at the URL you requested :(</p>
    </div>
  );
}

export default NotFound;
