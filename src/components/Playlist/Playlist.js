import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Playlist.scss";
import HeadPlaylist from "../../hoc/HeadPlaylist/HeadPlaylist";
import p1 from "../../Photos/albums/linkin-park.jpg";
import p2 from "../../Photos/albums/chainsmokers.jpg";
import p3 from "../../Photos/albums/hoobastank.jpg";
import p4 from "../../Photos/albums/one-direction.jpg";
import p5 from "../../Photos/albums/ac-dc.jpg";
import p6 from "../../Photos/albums/avicii.jpg";
import p7 from "../../Photos/albums/ye-jawaani-hai-deewani.jpg";
import p8 from "../../Photos/albums/charlie-puth.jpg";
import p9 from "../../Photos/albums/bollywood-songs.jpeg";

const Playlist = ({ parentToChild, songName }) => {
  const childToParent = (childData) => {
    parentToChild(childData);
  };

  const sendSongName = (childData) => {
    console.log(childData);
    songName(childData);
  };

  return (
    <div className="playlist">
      <Sidebar />
      <div className="playlist__content">
        <HeadPlaylist
          header="linkin-park"
          src={p1}
          childToParent={childToParent}
          songName={sendSongName}
        />
        <HeadPlaylist
          header="chainsmokers"
          src={p2}
          childToParent={childToParent}
          songName={sendSongName}
        />
        <HeadPlaylist
          header="hoobastank"
          src={p3}
          childToParent={childToParent}
          songName={sendSongName}
        />
        <HeadPlaylist
          header="one-direction"
          src={p4}
          childToParent={childToParent}
          songName={sendSongName}
        />
        <HeadPlaylist
          header="ac-dc"
          src={p5}
          childToParent={childToParent}
          songName={sendSongName}
        />
        <HeadPlaylist
          header="avicii"
          src={p6}
          childToParent={childToParent}
          songName={sendSongName}
        />
        <HeadPlaylist
          header="ye-jawani-hai-deewani"
          src={p7}
          childToParent={childToParent}
          songName={sendSongName}
        />
        <HeadPlaylist
          header="charlie-puth"
          src={p8}
          childToParent={childToParent}
          songName={sendSongName}
        />
        <HeadPlaylist
          header="bollywood-songs"
          src={p9}
          childToParent={childToParent}
          songName={sendSongName}
        />
      </div>
    </div>
  );
};

export default Playlist;
