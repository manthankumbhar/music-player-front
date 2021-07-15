import React, { Component } from "react";
import { Redirect } from "react-router";
import "./Home.css";
import home from "../Photos/home.png";
import search from "../Photos/magnifying-glass.png";
import map from "../Photos/map.png";

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
            <li className="nav_li">
              <a className="li_item" href="/">
                <img src={home} className="nav_icon" alt="nav icons" />
                Home
              </a>
            </li>
            <li className="nav_li">
              <a className="li_item" href="/">
                <img src={search} className="nav_icon" alt="nav icons" />
                Search
              </a>
            </li>
            <li className="nav_li">
              <a className="li_item" href="/">
                <img src={map} className="nav_icon" alt="nav icons" />
                Browse
              </a>
            </li>
          </ul>
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
