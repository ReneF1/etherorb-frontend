import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Landingpage from './pages/Landingpage/Landingpage';

const App = () =>
  (<div>
    <Switch>
      <Route exact path="/" component={Landingpage} />
    </Switch>
  </div>);

export default App;
