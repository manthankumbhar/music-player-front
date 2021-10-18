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

const Playlist = ({ parentToChild }) => {
  const childToParent = (childData) => {
    parentToChild(childData);
  };

  return (
    <div className="playlist">
      <Sidebar />
      <div className="playlist__content">
        <HeadPlaylist
          header="linkin-park"
          src={p1}
          childToParent={childToParent}
        />
        <HeadPlaylist
          header="chainsmokers"
          src={p2}
          childToParent={childToParent}
        />
        <HeadPlaylist
          header="hoobastank"
          src={p3}
          childToParent={childToParent}
        />
        <HeadPlaylist
          header="one-direction"
          src={p4}
          childToParent={childToParent}
        />
        <HeadPlaylist header="ac-dc" src={p5} childToParent={childToParent} />
        <HeadPlaylist header="avicii" src={p6} childToParent={childToParent} />
        <HeadPlaylist
          header="ye-jawani-hai-deewani"
          src={p7}
          childToParent={childToParent}
        />
        <HeadPlaylist
          header="charlie-puth"
          src={p8}
          childToParent={childToParent}
        />
        <HeadPlaylist
          header="bollywood-songs"
          src={p9}
          childToParent={childToParent}
        />
      </div>
    </div>
  );
};

export default Playlist;
