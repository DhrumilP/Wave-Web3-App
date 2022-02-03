import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, auth, data, ...rest }) => {
  console.log('Private auth: ', auth);
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={props =>
        auth ? <Component {...props} {...data} /> : <Redirect to='/' />
      }
    />
  );
};

export default PrivateRoute;
