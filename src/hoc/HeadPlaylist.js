import React, { useState } from "react";
import HocPlaylist from "./HocPlaylist";
import "./HeadPlaylist.scss";
import axios from "axios";

function HeadPlaylist(props) {
  const [songurl, updateSongUrl] = useState("");
  console.log(songurl);

  function SongCall(id) {
    axios
      .post(`https://monty-music-player.herokuapp.com/songs/${id}`)
      .then((res) => {
        var url = res.data["success"];
        updateSongUrl(url);
      });
  }

  var url = document.URL;
  var lastIndex = url.substring(url.lastIndexOf("/") + 1);
  if (props.header === lastIndex) {
    return (
      <div className="headplaylist">
        <div className="headplaylist__header">
          <img
            className="headplaylist__header--img"
            src={props.src}
            alt="album img"
          />
          <h1 className="headplaylist__header--1">{props.header}</h1>
        </div>
        <div className="headplaylist__songs">
          <HocPlaylist
            header="linkin-park"
            name="Castle of Glass"
            src="https://picsum.photos/261"
            duration="3:25"
            onClick={(e) => {
              e.preventDefault();
              SongCall("f9b385f8f55d4e71f5c87bca5dd7398c");
            }}
          />
          <HocPlaylist
            header="linkin-park"
            name="In the End"
            src="https://picsum.photos/262"
            duration="3:38"
            onClick={(e) => {
              e.preventDefault();
              SongCall("96314db77c240acc52079281e773d788");
            }}
          />
          <HocPlaylist
            header="linkin-park"
            name="What I've Done"
            src="https://picsum.photos/263"
            duration="3:25"
            onClick={(e) => {
              e.preventDefault();
              SongCall("021fe2ed1239b0ac610c79350d9a0153");
            }}
          />
          <HocPlaylist
            header="linkin-park"
            name="One more light"
            src="https://picsum.photos/264"
            duration="4:30"
            onClick={(e) => {
              e.preventDefault();
              SongCall("3baf39c75b2efc0a02535124993752c8");
            }}
          />
          <HocPlaylist
            header="chainsmokers"
            name="Closer"
            src="https://picsum.photos/266"
            duration="3:23"
          />
          <HocPlaylist
            header="chainsmokers"
            name="Don't let me down"
            src="https://picsum.photos/267"
            duration="4:12"
          />
          <HocPlaylist
            header="chainsmokers"
            name="Call you mine"
            src="https://picsum.photos/268"
            duration="4:28"
          />
          <HocPlaylist
            header="hoobastank"
            name="The Reason"
            src="https://picsum.photos/270"
            duration="2:21"
          />
          <HocPlaylist
            header="hoobastank"
            name="Out of Control"
            src="https://picsum.photos/271"
            duration="5:59"
          />
          <HocPlaylist
            header="hoobastank"
            name="Same Direction"
            src="https://picsum.photos/272"
            duration="2:56"
          />
          <HocPlaylist
            header="one-direction"
            name="What makes you Beautiful"
            src="https://picsum.photos/273"
            duration="3:01"
          />
          <HocPlaylist
            header="one-direction"
            name="Night Changes"
            src="https://picsum.photos/274"
            duration="3:56"
          />
          <HocPlaylist
            header="one-direction"
            name="Best Song Ever"
            src="https://picsum.photos/275"
            duration="2:46"
          />
          <HocPlaylist
            header="ac-dc"
            name="Highway to Hell"
            src="https://picsum.photos/276"
            duration="5:33"
          />
          <HocPlaylist
            header="ac-dc"
            name="Back in Black"
            src="https://picsum.photos/277"
            duration="5:21"
          />
          <HocPlaylist
            header="ac-dc"
            name="Thunderstruck"
            src="https://picsum.photos/278"
            duration="3:40"
          />
          <HocPlaylist
            header="avicii"
            name="The Nights"
            src="https://picsum.photos/279"
            duration="4:30"
          />
          <HocPlaylist
            header="avicii"
            name="Wake Me Up"
            src="https://picsum.photos/280"
            duration="5:42"
          />
          <HocPlaylist
            header="avicii"
            name="Waiting for Love"
            src="https://picsum.photos/281"
            duration="4:51"
          />
          <HocPlaylist
            header="ye-jawani-hai-deewani"
            name="Ilahi"
            src="https://picsum.photos/282"
            duration="6:01"
          />
          <HocPlaylist
            header="ye-jawani-hai-deewani"
            name="Kabira"
            src="https://picsum.photos/283"
            duration="3:39"
          />
          <HocPlaylist
            header="ye-jawani-hai-deewani"
            name="Balam Pichkari"
            src="https://picsum.photos/284"
            duration="6:03"
          />
          <HocPlaylist
            header="charlie-puth"
            name="We don't talk anymore"
            src="https://picsum.photos/285"
            duration="3:01"
          />
          <HocPlaylist
            header="charlie-puth"
            name="See You Again"
            src="https://picsum.photos/286"
            duration="4:07"
          />
          <HocPlaylist
            header="charlie-puth"
            name="One Call Away"
            src="https://picsum.photos/287"
            duration="2:54"
          />
          <HocPlaylist
            header="hindi-songs"
            name="Bheegi si Bhaagi si"
            src="https://picsum.photos/288"
            duration="4:56"
            onClick={(e) => {
              e.preventDefault();
              SongCall("390caeea05abbe714dceef44fcb90f31");
            }}
          />
          <HocPlaylist
            header="hindi-songs"
            name="Ijazat"
            src="https://picsum.photos/289"
            duration="3:38"
          />
          <HocPlaylist
            header="hindi-songs"
            name="Ek main aur Ekk tu"
            src="https://picsum.photos/290"
            duration="6:26"
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default HeadPlaylist;
