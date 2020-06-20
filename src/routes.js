import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import About from './pages/about/About'
import ContactBody from './components/Contact/ContactBody';


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={ContactBody} />
    </Switch>
  </BrowserRouter>
);
export default Router;
