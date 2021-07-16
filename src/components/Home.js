import React, { Component } from "react";
import { Redirect } from "react-router";
import "./Home.css";
import sprite from "../Photos/SVG/sprite.svg";
import logo from "../Photos/logo.png";
import { Link } from "react-router-dom";

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
      <div className="content_main">
        <nav className="sidebar">
          <ul className="nav_ul">
            <Link to="/" className="nav_logo_main">
              <img src={logo} className="nav_logo" alt="logo" />
            </Link>
            <li className="nav_li">
              <a className="li_item" href="/">
                <svg className="nav_icon">
                  <use href={sprite + "#icon-home"} />
                </svg>
                Home
              </a>
            </li>
            <li className="nav_li">
              <a className="li_item" href="/">
                <svg className="nav_icon">
                  <use href={sprite + "#icon-magnifying-glass"} />
                </svg>
                Search
              </a>
            </li>
            <li className="nav_li">
              <a className="li_item" href="/">
                <svg className="nav_icon">
                  <use href={sprite + "#icon-map"} />
                </svg>
                Browse
              </a>
            </li>
          </ul>
          <div className="nav_legal">
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
        <div className="content">
          <button className="btn btn-warning button_home" onClick={this.logout}>
            Logout
          </button>
        </div>
        {this.state.exit ? <Redirect to="/" /> : null}
      </div>
    );
  }
}

export default Home;
