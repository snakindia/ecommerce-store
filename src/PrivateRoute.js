import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from './services/authService';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn() ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
