// import axios from "axios";
import axios from "axios";
import React, { Component } from "react";
import { Spinner } from "react-bootstrap";
import { Redirect } from "react-router";
import "./SignUp.css";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loading: false,
      userAuthenticated: false,
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
      .post("https://monty-music-player.herokuapp.com/user_signup", {
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
        <form className="form-main">
          <div className="form-group col-sm-6 col-md-6 col-lg-4 mx-auto">
            <label className="label">Email address</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              className="form-control form-control-lg input"
              placeholder="Enter your email address..."
              required
            />
          </div>
          <div className="form-group col-sm-6 col-md-6 col-lg-4 mx-auto">
            <label className="label">Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              className="form-control form-control-lg input"
              placeholder="Password"
              required
            />
            <br />
            <button
              className="col-sm-12 col-md-12 btn-in rounded"
              onClick={this.handleSubmit}
            >
              Signup with email
            </button>
            <br />
            <br />
            <a href="/" className="a-tag_signup-redirect">
              Already a User?
            </a>
          </div>
          {this.state.loading ? (
            <Spinner animation="border" className="spinner_signup" />
          ) : null}
          {this.state.userAuthenticated ? <Redirect to="/home" /> : null}
          {localStorage.accessTokenSecret ? <Redirect to="/home" /> : null}
        </form>
      </div>
    );
  }
}

export default SignUp;
