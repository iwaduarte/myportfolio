import React from 'react';
// noinspection ES6CheckImport
import { Route, Switch } from 'react-router-dom';
import Bot from '../../bot/Bot';
import Home from '../../home/Home';

const Main = () => (
  <>
    <Switch>
      <Route path="/bot" component={Bot} />
      <Route exact path="/" component={Home} />
    </Switch>
  </>
);

export default Main;
