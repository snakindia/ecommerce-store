import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import About from './pages/about/About'


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
    </Switch>
  </BrowserRouter>
);
export default Router;
