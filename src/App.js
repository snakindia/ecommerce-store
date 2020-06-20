import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import TopBar from './components/TopBar';
import Client from './components/Home/Client';
import ContactBody from './components/Contact/ContactBody';
import HomeBody from './components/Home/HomeBody';
import FreeBrochures from './components/Home/ProductsParts'

import ProductsParts from './components/Home/ProductsParts';
import Banner from './components/Home/Banner';
import HeaderFull from './components/HeaderFull';
import Footer from './components/Footer'
class App extends Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  closeCollapse = collID => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: '' });
  };

  render() {
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.toggleCollapse('mainNavbarCollapse')}
      />
    );

    const { collapseID } = this.state;

    return (
      <div>
        <TopBar />
        <HeaderFull />
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomeBody} />
          <Route path="/contact" component={ContactBody} />
        </Switch>
      </Router>
      <Banner />
      <ProductsParts />
      <Client />
      <Footer />
      </div>
    );
  }
}

export default App;
