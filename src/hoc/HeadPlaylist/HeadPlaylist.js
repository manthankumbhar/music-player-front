import React from "react";
import HocPlaylist from "../../hoc/HocPlaylist/HocPlaylist";
import "./HeadPlaylist.scss";
import axios from "axios";

function HeadPlaylist({ childToParent, header, src }) {
  function SongCall(id) {
    axios
      .post(`https://monty-music-player.herokuapp.com/songs/${id}`)
      .then((res) => {
        var url = res.data["success"];
        childToParent(url);
      });
  }

  var url = document.URL;
  var lastIndex = url.substring(url.lastIndexOf("/") + 1);
  if (header === lastIndex) {
    return (
      <div className="headplaylist">
        <div className="headplaylist__header">
          <img
            className="headplaylist__header--img"
            src={src}
            alt="album img"
          />
          <h1 className="headplaylist__header--1">{header}</h1>
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
            onClick={(e) => {
              e.preventDefault();
              SongCall("1c07ee053ce28b9f39eefeee63acf1b9");
            }}
          />
          <HocPlaylist
            header="chainsmokers"
            name="Don't let me down"
            src="https://picsum.photos/267"
            duration="4:12"
            onClick={(e) => {
              e.preventDefault();
              SongCall("7ff0a2c1dac39b69e878ec7984d11977");
            }}
          />
          <HocPlaylist
            header="chainsmokers"
            name="Call you mine"
            src="https://picsum.photos/268"
            duration="4:28"
            onClick={(e) => {
              e.preventDefault();
              SongCall("dac1eff31187a680f2522f59a2a56891");
            }}
          />
          <HocPlaylist
            header="hoobastank"
            name="The Reason"
            src="https://picsum.photos/270"
            duration="2:21"
            onClick={(e) => {
              e.preventDefault();
              SongCall("68a1fa9fc6f2b189008e5673f1974cf7");
            }}
          />
          <HocPlaylist
            header="hoobastank"
            name="Out of Control"
            src="https://picsum.photos/271"
            duration="5:59"
            onClick={(e) => {
              e.preventDefault();
              SongCall("4fdaa955993905d883d3f6b288163c76");
            }}
          />
          <HocPlaylist
            header="hoobastank"
            name="Same Direction"
            src="https://picsum.photos/272"
            duration="2:56"
            onClick={(e) => {
              e.preventDefault();
              SongCall("f1567d96234140801cf282caa5804bb1");
            }}
          />
          <HocPlaylist
            header="one-direction"
            name="What makes you Beautiful"
            src="https://picsum.photos/273"
            duration="3:01"
            onClick={(e) => {
              e.preventDefault();
              SongCall("71c5da86bbff082ba449f24cc007a9e6");
            }}
          />
          <HocPlaylist
            header="one-direction"
            name="Night Changes"
            src="https://picsum.photos/274"
            duration="3:56"
            onClick={(e) => {
              e.preventDefault();
              SongCall("80ef92a58fdedb17711a8bb3315a532f");
            }}
          />
          <HocPlaylist
            header="one-direction"
            name="Best Song Ever"
            src="https://picsum.photos/275"
            duration="2:46"
            onClick={(e) => {
              e.preventDefault();
              SongCall("59c7c3289ca8c19ffb7e119527336290");
            }}
          />
          <HocPlaylist
            header="ac-dc"
            name="Highway to Hell"
            src="https://picsum.photos/276"
            duration="5:33"
            onClick={(e) => {
              e.preventDefault();
              SongCall("7c3d655226638a58e6ccc75f72688143");
            }}
          />
          <HocPlaylist
            header="ac-dc"
            name="Back in Black"
            src="https://picsum.photos/277"
            duration="5:21"
            onClick={(e) => {
              e.preventDefault();
              SongCall("b802798e38c9afe0eccee62a3c79e914");
            }}
          />
          <HocPlaylist
            header="ac-dc"
            name="Thunderstruck"
            src="https://picsum.photos/278"
            duration="3:40"
            onClick={(e) => {
              e.preventDefault();
              SongCall("aeeff70bd592a87d6c32061a754cb1dc");
            }}
          />
          <HocPlaylist
            header="avicii"
            name="The Nights"
            src="https://picsum.photos/279"
            duration="4:30"
            onClick={(e) => {
              e.preventDefault();
              SongCall("a7a50797ea25543fc867a1675fa85116");
            }}
          />
          <HocPlaylist
            header="avicii"
            name="Wake Me Up"
            src="https://picsum.photos/280"
            duration="5:42"
            onClick={(e) => {
              e.preventDefault();
              SongCall("f1607aceab1bf909ae8ec6d92e055f6f");
            }}
          />
          <HocPlaylist
            header="avicii"
            name="Waiting for Love"
            src="https://picsum.photos/281"
            duration="4:51"
            onClick={(e) => {
              e.preventDefault();
              SongCall("393bfe187ffae1e65bebbcdafb94ec1e");
            }}
          />
          <HocPlaylist
            header="ye-jawani-hai-deewani"
            name="Ilahi"
            src="https://picsum.photos/282"
            duration="6:01"
            onClick={(e) => {
              e.preventDefault();
              SongCall("61d65ea52fa8149b829acadf232b6694");
            }}
          />
          <HocPlaylist
            header="ye-jawani-hai-deewani"
            name="Kabira"
            src="https://picsum.photos/283"
            duration="3:39"
            onClick={(e) => {
              e.preventDefault();
              SongCall("e17e5bc210e53898155e49da29c480a6");
            }}
          />
          <HocPlaylist
            header="ye-jawani-hai-deewani"
            name="Balam Pichkari"
            src="https://picsum.photos/284"
            duration="6:03"
            onClick={(e) => {
              e.preventDefault();
              SongCall("f672bb170c8b6cdd702c6e2252d6cff7");
            }}
          />
          <HocPlaylist
            header="charlie-puth"
            name="We don't talk anymore"
            src="https://picsum.photos/285"
            duration="3:01"
            onClick={(e) => {
              e.preventDefault();
              SongCall("40a074a6ae84d38326297747c142ffe2");
            }}
          />
          <HocPlaylist
            header="charlie-puth"
            name="See You Again"
            src="https://picsum.photos/286"
            duration="4:07"
            onClick={(e) => {
              e.preventDefault();
              SongCall("b0039be99dd884f9f7fec9c8124ae3ae");
            }}
          />
          <HocPlaylist
            header="charlie-puth"
            name="One Call Away"
            src="https://picsum.photos/287"
            duration="2:54"
            onClick={(e) => {
              e.preventDefault();
              SongCall("8af4773cffeae963b965f6768b94bc8e");
            }}
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
            onClick={(e) => {
              e.preventDefault();
              SongCall("d952cb820f8ab07496deff25f5560e1d");
            }}
          />
          <HocPlaylist
            header="hindi-songs"
            name="Ek main aur Ekk tu"
            src="https://picsum.photos/290"
            duration="6:26"
            onClick={(e) => {
              e.preventDefault();
              SongCall("8b4eb1feedefe8ee092417bc59b47fa2");
            }}
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default HeadPlaylist;
