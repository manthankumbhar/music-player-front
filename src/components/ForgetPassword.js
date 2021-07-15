import axios from "axios";
import React from "react";
import { Component } from "react";
import { Spinner } from "react-bootstrap";
import { Redirect } from "react-router";
import "./ForgetPassword.css";

class ForgetPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      number: "",
      otp: "",
      otpSent: false,
      otpVerified: false,
      newPassword: "",
      loading: false,
      done: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendOTP = this.sendOTP.bind(this);
    this.verifyOTP = this.verifyOTP.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  sendOTP(e) {
    e.preventDefault();
    this.setState({ loading: true });
    axios
      .post(
        "https://monty-music-player.herokuapp.com/forget_password_trigger",
        {
          phone: this.state.number,
        }
      )
      .then((res) => {
        if (res.status === 200) {
          this.setState({ loading: false });
          this.setState({ otpSent: true });
          console.log(res.data);
        } else {
          this.setState({ loading: false });
          alert("Server down, Please try again later!");
        }
      });
  }

  verifyOTP(e) {
    e.preventDefault();
    this.setState({ loading: true });
    axios
      .post("https://monty-music-player.herokuapp.com/forget_password_verify", {
        phone: this.state.number,
        code: this.state.otp,
      })
      .then((res) => {
        if (res.data.valid === true) {
          this.setState({ loading: false });
          this.setState({ otpVerified: true });
        } else {
          this.setState({ loading: false });
          alert("Wrong otp! please try again");
        }
      });
  }

  resetPassword(e) {
    e.preventDefault();
    this.setState({ loading: true });
    axios
      .post("https://monty-music-player.herokuapp.com/reset_password", {
        email: this.state.email,
        password: this.state.newPassword,
      })
      .then((res) => {
        if (res.status === 200) {
          this.setState({ loading: false });
          alert(res.data["success"]);
          this.setState({ done: true });
        }
      })
      .catch((err) => {
        alert(err.response.data["error"]);
        this.setState({ done: true });
      });
  }

  render() {
    return (
      <div>
        <h1 className="h1-tag_forget_password">ForgetPassword</h1>
        <form onSubmit={this.sendOTP}>
          <input
            value={this.state.email}
            onChange={this.handleChange}
            type="email"
            name="email"
            className="input_forget_password"
            placeholder="Email id"
            required
          />
          <input
            value={this.state.number}
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="[0-9]{12}"
            className="input_forget_password"
            placeholder="Country code followed by phone number"
            required
          />
          <br />
          <button type="submit" className="btn btn-danger button">
            send OTP
          </button>
        </form>
        <br />
        {this.state.otpSent ? (
          <form onSubmit={this.verifyOTP}>
            <input
              value={this.state.otp}
              onChange={this.handleChange}
              type="number"
              name="otp"
              placeholder="otp"
              className="input_forget_password"
              required
            />
            <br />
            <button type="submit" className="btn btn-primary button">
              Verify
            </button>
          </form>
        ) : null}
        <br />
        {this.state.otpVerified ? (
          <form onSubmit={this.resetPassword}>
            <input
              value={this.state.newPassword}
              onChange={this.handleChange}
              type="password"
              name="newPassword"
              placeholder="Enter a new password"
              className="input_forget_password"
              required
            />
            <br />
            <button type="submit" className="btn btn-primary button">
              Confirm
            </button>
          </form>
        ) : null}
        {this.state.loading ? (
          <Spinner animation="border" className="spinner_forgetPassword" />
        ) : null}
        {this.state.done ? <Redirect to="/" /> : null}
      </div>
    );
  }
}

export default ForgetPassword;
