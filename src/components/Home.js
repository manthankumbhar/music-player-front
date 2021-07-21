import React, { Component } from "react";
import { Redirect } from "react-router";
import "./Home.scss";
import sprite from "../Photos/SVG/sprite.svg";
import logo from "../Photos/logo.png";
import { Link } from "react-router-dom";
import HocLink from "../hoc/HocLink";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      exit: false,
    };
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    localStorage.removeItem("accessTokenSecret");
    localStorage.removeItem("userEmail");
    this.setState({ exit: true });
  }

  render() {
    return (
      <div className="home">
        <nav className="home__sidebar">
          <ul className="home__sidebar--nav-ul">
            <Link to="/">
              <img src={logo} className="home__sidebar--nav-logo" alt="logo" />
            </Link>
            <li className="home__sidebar--nav-li">
              <a className="home__sidebar--li-item" href="/">
                <svg className="home__sidebar--nav-icon">
                  <use href={sprite + "#icon-home"} />
                </svg>
                Home
              </a>
            </li>
            <li className="home__sidebar--nav-li">
              <a className="home__sidebar--li-item" href="/">
                <svg className="home__sidebar--nav-icon">
                  <use href={sprite + "#icon-magnifying-glass"} />
                </svg>
                Search
              </a>
            </li>
            <li className="home__sidebar--nav-li">
              <a className="home__sidebar--li-item" href="/">
                <svg className="home__sidebar--nav-icon">
                  <use href={sprite + "#icon-map"} />
                </svg>
                Browse
              </a>
            </li>
          </ul>
          <div className="home__sidebar--legal">
            {" "}
            Developed by{" "}
            <a
              href="https://manthankumbhar.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Manthan Kumbhar
            </a>{" "}
            &copy; {new Date().getFullYear()}
            <br />
            All Rights Reserved
          </div>
        </nav>
        <div className="home__content">
          <div className="home__content--item">
            <HocLink src={logo} link="/" title="Test-1" />
            <HocLink src={logo} link="/" title="Test-2" />
            <HocLink src={logo} link="/" title="Test-3" />
          </div>
          <div className="home__content--item">
            <HocLink src={logo} link="/" title="Test-4" />
            <HocLink src={logo} link="/" title="Test-5" />
            <HocLink src={logo} link="/" title="Test-6" />
          </div>
          <div className="home__content--item">
            <HocLink src={logo} link="/" title="Test-7" />
            <HocLink src={logo} link="/" title="Test-8" />
            <HocLink src={logo} link="/" title="Test-9" />
            <button
              className="btn btn-warning home__content--btn"
              onClick={this.logout}
            >
              Logout
            </button>
          </div>
        </div>
        {this.state.exit ? <Redirect to="/" /> : null}
      </div>
    );
  }
}

export default Home;
