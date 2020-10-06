import React, { Component, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';

class App extends Component {
  state = {
    collapseID: '',
  };
  

    componentDidMount() {
//        window.timer = setInterval(() => {
//            const currentTime = localStorage.getItem("currentTime");
//            let timeDiff = Date.now() - currentTime;
//            if (timeDiff > 10000 && this.getCookie("subscriptionPopUp") != 'true') {
////            if (timeDiff > 10000) {
//                document.getElementsByClassName("delayedPopupWindow")[0].style.display = "block";
//                document.getElementsByClassName("backgroundOverlay")[0].style.display = "block";
//            }
//        }
//        , 1000)
    }
    
    getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
              c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : '',
    }));

    closeCollapse = collID => () => {
        const { collapseID } = this.state;
        window.scrollTo(0, 0);
        collapseID === collID && this.setState({ collapseID: '' });
    };

    _onMouseMove(e) {
        localStorage.setItem("currentTime", Date.now());
    };
    
  
    
  render() {
  
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: 'transparent' }}
        onClick={this.toggleCollapse('mainNavbarCollapse')}
      />
    );

    const { collapseID } = this.state;

    return (
      <div  onMouseMove={this._onMouseMove.bind(this)}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
