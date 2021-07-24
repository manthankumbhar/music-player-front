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
          <h1>{headerText}</h1>
        </div>
      </div>
    );
  }
}

export default Playlist;
