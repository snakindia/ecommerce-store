import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import About from './pages/about/About'
import ContactBody from './components/Contact/ContactBody';
import TopBar from './components/TopBar';
import HeaderFull from './components/HeaderFull';
import Footer from './components/Footer';

const Router = () => (
    <BrowserRouter>
        <TopBar />
        <HeaderFull />
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={ContactBody} />
        </Switch>
        <Footer />
    </BrowserRouter>
);
export default Router;
