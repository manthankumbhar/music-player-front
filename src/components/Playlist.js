import React from "react";
import { Component } from "react";
import Sidebar from "./Sidebar";
import "./Playlist.scss";

class Playlist extends Component {
  render() {
    var url = document.URL;
    var headerText = url.substring(url.lastIndexOf("/") + 1);
    return (
      <div className="playlist">
        <Sidebar />
        <div className="playlist__content">
          <div className="playlist__header">
            <img
              className="playlist__header--img"
              src="https://picsum.photos/250"
              alt="album img"
            />
            <h1 className="playlist__header--1">{headerText}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Playlist;
