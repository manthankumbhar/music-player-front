import React from "react";
import { Component } from "react";
import sprite from "../../Photos/SVG/sprite.svg";
import logo from "../../Photos/logo.png";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

class Sidebar extends Component {
  render() {
    return (
      <nav className="sidebar">
        <ul className="sidebar--nav-ul">
          <Link to="/home">
            <img src={logo} className="sidebar--nav-logo" alt="logo" />
          </Link>
          <li className="sidebar--nav-li">
            <Link className="sidebar--li-item" to="/home">
              <svg className="sidebar--nav-icon">
                <use href={sprite + "#icon-home"} />
              </svg>
              Home
            </Link>
          </li>
          <li className="sidebar--nav-li">
            <Link className="sidebar--li-item" to="/home">
              <svg className="sidebar--nav-icon">
                <use href={sprite + "#icon-magnifying-glass"} />
              </svg>
              Search
            </Link>
          </li>
          <li className="sidebar--nav-li">
            <Link className="sidebar--li-item" to="/home">
              <svg className="sidebar--nav-icon">
                <use href={sprite + "#icon-map"} />
              </svg>
              Browse
            </Link>
          </li>
        </ul>
        <div className="sidebar--legal">
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
    );
  }
}

export default Sidebar;
