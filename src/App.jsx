import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Portfolio from './routes/Portfolio';
import NotFound from './routes/NotFound';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
