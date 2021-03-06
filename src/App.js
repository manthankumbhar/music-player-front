import React, { useState } from "react";
import { Switch, Route } from "react-router";
import "./App.scss";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Error from "./UI/Error/Error";
import PrivateRoute from "./hoc/PrivateRoute";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import Playlist from "./components/Playlist/Playlist";
import Search from "./components/Search/Search";
import Browse from "./components/Browse/Browse";

function App() {
  const [song, updateSong] = useState("");
  const [songName, updateSongName] = useState("");

  const parentToChild = (childData) => {
    updateSong(childData);
  };

  const sendSongName = (childData) => {
    updateSongName(childData);
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgetpassword" component={ForgetPassword} />
        <PrivateRoute
          path="/home"
          page="false"
          component={Home}
          src={song}
          songName={songName}
        />
        <PrivateRoute
          component={Playlist}
          path="/playlist"
          page="true"
          comp={
            <Playlist parentToChild={parentToChild} songName={sendSongName} />
          }
          src={song}
          songName={songName}
        />
        <PrivateRoute
          path="/search"
          component={Search}
          page="true"
          comp={
            <Search childToParent={parentToChild} songName={sendSongName} />
          }
          src={song}
          songName={songName}
        />
        <PrivateRoute
          path="/browse"
          component={Browse}
          page="true"
          comp={
            <Browse childToParent={parentToChild} songName={sendSongName} />
          }
          src={song}
          songName={songName}
        />
        <Route path="*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
