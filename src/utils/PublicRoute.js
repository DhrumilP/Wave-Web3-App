import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, auth, data, ...rest }) => {
  console.log('PublicRoute auth: ', auth);
  return (
    <Route
      {...rest}
      render={props =>
        auth ? <Redirect to='/service' /> : <Component {...props} {...data} />
      }
    />
  );
};

export default PublicRoute;
