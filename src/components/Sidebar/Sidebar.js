import React, { useState } from "react";
import sprite from "../../Photos/SVG/sprite.svg";
import logo from "../../Photos/logo.png";
import { Link, Redirect } from "react-router-dom";
import "./Sidebar.scss";

export default function Sidebar() {
  const [Logout, setLogout] = useState(false);

  function logout(e) {
    e.preventDefault();
    localStorage.removeItem("accessTokenSecret");
    localStorage.removeItem("userEmail");
    setLogout(true);
  }

  var url = document.URL;
  var lastIndex = url.substring(url.lastIndexOf("/") + 1);
  return (
    <nav className="sidebar">
      <ul className="sidebar--nav-ul">
        <Link to="/home" className="sidebar--nav-logo">
          <img src={logo} className="sidebar--nav-logo-icon" alt="logo" />
        </Link>
        <li className="sidebar--nav-li">
          <Link
            className={
              lastIndex === "home"
                ? "sidebar--li-item active"
                : "sidebar--li-item"
            }
            to="/home"
          >
            <svg className="sidebar--nav-icon">
              <use href={sprite + "#icon-home"} />
            </svg>
            Home
          </Link>
        </li>
        <li className="sidebar--nav-li">
          <Link
            className={
              lastIndex === "search"
                ? "sidebar--li-item active"
                : "sidebar--li-item"
            }
            to="/search"
          >
            <svg className="sidebar--nav-icon">
              <use href={sprite + "#icon-magnifying-glass"} />
            </svg>
            Search
          </Link>
        </li>
        <li className="sidebar--nav-li">
          <Link
            className={
              lastIndex === "browse"
                ? "sidebar--li-item active"
                : "sidebar--li-item"
            }
            to="/browse"
          >
            <svg className="sidebar--nav-icon">
              <use href={sprite + "#icon-map"} />
            </svg>
            Browse
          </Link>
        </li>
        <li className="sidebar--nav-li">
          <Link className="sidebar--li-item" to="/" onClick={logout}>
            <svg className="sidebar--nav-icon">
              <use href={sprite + "#icon-log-out"} />
            </svg>
            Logout
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
      {Logout === true ? <Redirect to="/" /> : null}
    </nav>
  );
}
