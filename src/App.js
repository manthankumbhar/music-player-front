import { Component } from "react";
import { Switch, Route } from "react-router";
import "./App.scss";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Error from "./UI/Error";
import PrivateRoute from "./hoc/PrivateRoute";
import ForgetPassword from "./components/ForgetPassword";
import Playlist from "./components/Playlist";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/home" component={Home} page="false" />
          <Route path="/forgetpassword" component={ForgetPassword} />
          <PrivateRoute path="/playlist" component={Playlist} page="true" />
          <Route path="*" component={Error} />
        </Switch>
      </div>
    );
  }
}

export default App;
