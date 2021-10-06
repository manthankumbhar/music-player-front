import React from "react";
import { Route } from "react-router";
import Home from "../components/Home";
import Error from "../UI/Error";
import MainAuth from "./Auth";

const PrivateRoute = ({
  component: Component,
  page: Page,
  comp: Comp,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      MainAuth.isAuth ? (
        <Component {...props} />
      ) : localStorage.accessTokenSecret ? (
        localStorage.getItem("accessTokenSecret") && Page === "true" ? (
          { ...Comp }
        ) : (
          <Home />
        )
      ) : (
        <p style={{ fontSize: "3.5rem", fontWeight: "900" }}>
          <Error />
        </p>
      )
    }
  />
);

export default PrivateRoute;
