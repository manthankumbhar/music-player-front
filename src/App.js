import React, { useState } from "react";
import { Switch, Route } from "react-router";
import "./App.scss";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Error from "./UI/Error";
import PrivateRoute from "./hoc/PrivateRoute";
import ForgetPassword from "./components/ForgetPassword";
import Playlist from "./components/Playlist";
import HocPlayer from "./hoc/HocPlayer";

function App() {
  const [song, updateSong] = useState("");

  const parentToChild = (childData) => {
    updateSong(childData);
    console.log(`pass 2: ${song}`);
  };

  return (
    <div>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/home" page="false">
            <Home />
            <HocPlayer src={song} />
          </PrivateRoute>
          <Route path="/forgetpassword" component={ForgetPassword} />
          <PrivateRoute component={Playlist} path="/playlist" page="true">
            <Playlist parentToChild={parentToChild} />
            <HocPlayer src={song} />
          </PrivateRoute>
          <Route path="*" component={Error} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
