import React from "react";
import { Route } from "react-router";
import Home from "../components/Home/Home";
import Error from "../UI/Error/Error";
import MainAuth from "./Auth";
import HocPlayer from "./HocPlayer/HocPlayer";

const PrivateRoute = ({
  component: Component,
  page: Page,
  comp: Comp,
  src: Src,
  songName: SongName,
  ...rest
}) => {
  return (
    <div>
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
            <Error />
          )
        }
      />
      {localStorage.accessTokenSecret ? (
        <HocPlayer src={Src} songName={SongName} />
      ) : null}
    </div>
  );
};

export default PrivateRoute;
