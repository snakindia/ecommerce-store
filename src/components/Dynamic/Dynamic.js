import React, { Component } from 'react';
import { Route, NavLink, Switch, Link } from 'react-router-dom';
import { GET } from '../../services/httpService';
import { X } from './X';
import { Y } from './Y';
import { Z } from './Z';

const TEMPLATES = {
  X: X,
  Y: Y,
  Z: Z,
};

class Dynamic extends Component {
  state = {
    routes: [],
  };
  async componentDidMount() {
    const res = await GET({
      url: 'https://run.mocky.io/v3/d85f795d-8897-4e0c-ae5f-249cf144bf0a',
    });
    this.setState({ routes: res.data });
  }

  render() {
    const { routes } = this.state;
    const { match } = this.props;
    const isRoutes = routes.length;
    return (
      <Switch>
        <div className="content-wrapper topPadding" id="content">
          <div className="pagewrap">
            <div className="bgWhite padding-bottom">
              <div>
                {isRoutes &&
                  routes.map(route => {
                    return (
                      <Route
                        path={`${match.path}${route.route}`}
                        render={props => {
                          const Componet = TEMPLATES[route.component];
                          return (
                            <div>
                              Hello {props.location.pathname}
                              <Componet />
                            </div>
                          );
                        }}
                      />
                    );
                  })}
              </div>
              <section className="bg-opeque box-shadow footerItems">
                <div>
                  {isRoutes &&
                    routes.map(route => {
                      return (
                        <NavLink to={`${match.path}${route.route}`}>
                          {route.route}
                        </NavLink>
                      );
                    })}
                </div>
              </section>
            </div>
          </div>
        </div>
      </Switch>
    );
  }
}
export default Dynamic;
