import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Playlist.scss";
import HeadPlaylist from "../../hoc/HeadPlaylist/HeadPlaylist";

const Playlist = ({ parentToChild }) => {
  const childToParent = (childData) => {
    parentToChild(childData);
    console.log(`pass 1: ${childData}`);
  };

  return (
    <div className="playlist">
      <Sidebar />
      <div className="playlist__content">
        <HeadPlaylist
          header="linkin-park"
          src="https://picsum.photos/300"
          childToParent={childToParent}
        />
        <HeadPlaylist
          header="chainsmokers"
          src="https://picsum.photos/301"
          childToParent={childToParent}
        />
        <HeadPlaylist
          header="hoobastank"
          src="https://picsum.photos/302"
          childToParent={childToParent}
        />
        <HeadPlaylist
          header="one-direction"
          src="https://picsum.photos/303"
          childToParent={childToParent}
        />
        <HeadPlaylist
          header="ac-dc"
          src="https://picsum.photos/304"
          childToParent={childToParent}
        />
        <HeadPlaylist
          header="avicii"
          src="https://picsum.photos/305"
          childToParent={childToParent}
        />
        <HeadPlaylist
          header="ye-jawani-hai-deewani"
          src="https://picsum.photos/306"
          childToParent={childToParent}
        />
        <HeadPlaylist
          header="charlie-puth"
          src="https://picsum.photos/307"
          childToParent={childToParent}
        />
        <HeadPlaylist
          header="hindi-songs"
          src="https://picsum.photos/308"
          childToParent={childToParent}
        />
      </div>
    </div>
  );
};

export default Playlist;
