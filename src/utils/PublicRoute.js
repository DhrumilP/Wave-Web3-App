import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, auth, ...rest }) => {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    console.log({ ...rest }),
    (
      <Route
        {...rest}
        render={props =>
          auth ? (
            <Redirect to='/dashboard' />
          ) : (
            <Component {...rest} {...props} />
          )
        }
      />
    )
  );
};

export default PublicRoute;
