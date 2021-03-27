import React from 'react';
import ReactGA from 'react-ga';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import RouteChangeTracker from './components/RouteChangeTracker';

import Portfolio from './routes/Portfolio';
import NotFound from './routes/NotFound';

const TRACKING_ID = "UA-193123795-1";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <RouteChangeTracker />
      <Switch>
        <Route path="/" exact>
          <Portfolio />
        </Route>
        <Route path="/404" exact>
          <NotFound />
        </Route>
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
