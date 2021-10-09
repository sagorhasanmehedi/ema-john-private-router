import React from "react";
import { Redirect, Route, useLocation } from "react-router";
import UseAuth from "../../hooks/Usecontext";

const Privaterouter = ({ children, ...rest }) => {
  const { user } = UseAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    ></Route>
  );
};
export default Privaterouter;
