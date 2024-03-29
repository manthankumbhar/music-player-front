import axios from "axios";
import React, { Component } from "react";
import { Spinner } from "react-bootstrap";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import logo from "../../Photos/logo.png";
import "./SignIn.scss";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      userAuthenticated: false,
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });
    axios
      .post("https://music-player-back-production.up.railway.app/user_auth", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        if (res.status === 200) {
          this.setState({ loading: false });
          localStorage.setItem("accessTokenSecret", res.data["success"]);
          localStorage.setItem("userEmail", this.state.email);
          this.setState({ userAuthenticated: true });
        }
      })
      .catch((err) => {
        this.setState({ loading: false });
        alert(err.response.data["error"]);
      });
  }

  render() {
    return (
      <div>
        <img src={logo} alt="logo" />
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-6 col-md-6 col-lg-4 mx-auto">
            <label className="form-signin__label">Email address</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              className="form-signin__input form-control form-control-lg"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group col-sm-6 col-md-6 col-lg-4 mx-auto">
            <label className="form-signin__label">Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              className="form-signin__input form-control form-control-lg"
              placeholder="Password"
              required
            />
          </div>
          <div className="form-group col-sm-6 col-md-6 col-lg-4 mx-auto">
            <button
              className="col-sm-12 col-md-12 form-signin__btn rounded"
              type="submit"
            >
              Continue with email
            </button>
            <br />
            <br />
            <Link to="/forgetpassword" className="form-signin__forgot-password">
              Forget password?
            </Link>
            <Link to="/signup" className="form-signin__new-user">
              New user?
            </Link>
          </div>
          {this.state.userAuthenticated ? <Redirect to="/home" /> : null}
          {localStorage.accessTokenSecret ? <Redirect to="/home" /> : null}
          {this.state.loading ? (
            <Spinner animation="border" className="form-signin__spinner" />
          ) : null}
        </form>
      </div>
    );
  }
}

export default SignIn;
