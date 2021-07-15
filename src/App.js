import { Component } from "react";
import { Switch, Route } from "react-router";
import "./App.css";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Error from "./UI/Error";
import PrivateRoute from "./hoc/PrivateRoute";
import ForgetPassword from "./components/ForgetPassword";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/home" component={Home} />
          <Route path="/forgetpassword" component={ForgetPassword} />
          <Route path="*" component={Error} />
        </Switch>
      </div>
    );
  }
}

export default App;
