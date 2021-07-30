import React from "react";
import { Component } from "react";
import Sidebar from "./Sidebar";
import "./Playlist.scss";
import HeadPlaylist from "../hoc/HeadPlaylist";
import HocPlayer from "../hoc/HocPlayer";

class Playlist extends Component {
  render() {
    return (
      <div className="playlist">
        <Sidebar />
        <div className="playlist__content">
          <HeadPlaylist header="linkin-park" src="https://picsum.photos/300" />
          <HeadPlaylist header="chainsmokers" src="https://picsum.photos/301" />
          <HeadPlaylist header="hoobastank" src="https://picsum.photos/302" />
          <HeadPlaylist
            header="one-direction"
            src="https://picsum.photos/303"
          />
          <HeadPlaylist header="ac-dc" src="https://picsum.photos/304" />
          <HeadPlaylist header="avicii" src="https://picsum.photos/305" />
          <HeadPlaylist
            header="ye-jawani-hai-deewani"
            src="https://picsum.photos/306"
          />
          <HeadPlaylist header="charlie-puth" src="https://picsum.photos/307" />
          <HeadPlaylist header="hindi-songs" src="https://picsum.photos/308" />
        </div>
        <HocPlayer />
      </div>
    );
  }
}

export default Playlist;
