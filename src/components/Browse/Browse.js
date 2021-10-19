import axios from "axios";
import React from "react";
import HocPlaylist from "../../hoc/HocPlaylist/HocPlaylist";
import Sidebar from "../Sidebar/Sidebar";
import "./Browse.scss";
import p1 from "../../Photos/songs/castle-of-glass.jpg";
import p2 from "../../Photos/songs/in-the-end.jpg";
import p3 from "../../Photos/songs/what-i've-done.jpg";
import p4 from "../../Photos/songs/one-more-light.jpg";
import p5 from "../../Photos/songs/closer.jpg";
import p6 from "../../Photos/songs/don't-let-me-down.jpg";
import p7 from "../../Photos/songs/call-you-mine.jpg";
import p8 from "../../Photos/songs/the-reason.jpg";
import p9 from "../../Photos/songs/out-of-control.jpg";
import p10 from "../../Photos/songs/same-direction.jpeg";
import p11 from "../../Photos/songs/what-makes-you-beautiful.jpg";
import p12 from "../../Photos/songs/night-changes.png";
import p13 from "../../Photos/songs/best-song-ever.jpg";
import p14 from "../../Photos/songs/highway-to-hell.jpeg";
import p15 from "../../Photos/songs/back-in-black.jpg";
import p16 from "../../Photos/songs/thunderstruck.png";
import p17 from "../../Photos/songs/the-nights.png";
import p18 from "../../Photos/songs/wake-me-up.jpg";
import p19 from "../../Photos/songs/waiting-for-love.png";
import p20 from "../../Photos/songs/ilahi.jpg";
import p21 from "../../Photos/songs/kabira.jpg";
import p22 from "../../Photos/songs/balam-pichkari.jpg";
import p23 from "../../Photos/songs/we-don't-talk-anymore.jpg";
import p24 from "../../Photos/songs/see-you-again.jpg";
import p25 from "../../Photos/songs/one-call-away.jpg";
import p26 from "../../Photos/songs/bheegi-si-bhaagi-si.jpg";
import p27 from "../../Photos/songs/ijazat.jpg";
import p28 from "../../Photos/songs/ek-main-aur-ek-tu.jpg";

const Browse = ({ childToParent, songName }) => {
  function SongCall(id) {
    axios
      .post(`https://monty-music-player.herokuapp.com/songs/${id}`)
      .then((res) => {
        var url = res.data["success"];
        childToParent(url);
      });
  }

  // const sendSongName = (childData) => {
  //   console.log(childData);
  //   songName(childData);
  // };

  return (
    <div className="browse">
      <Sidebar />
      <div className="browse__content">
        <h1 className="browse__header">Browse Songs</h1>
        <div>
          <HocPlaylist
            header="browse"
            name="Back in Black"
            src={p15}
            duration="4:13"
            onClick={(e) => {
              e.preventDefault();
              SongCall("b802798e38c9afe0eccee62a3c79e914");
              songName("Back in black");
            }}
          />
          <HocPlaylist
            header="browse"
            name="Balam Pichkari"
            src={p22}
            duration="4:19"
            onClick={(e) => {
              e.preventDefault();
              SongCall("f672bb170c8b6cdd702c6e2252d6cff7");
              songName("Balam pichkari");
            }}
          />
          <HocPlaylist
            header="browse"
            name="Best Song Ever"
            src={p13}
            duration="3:18"
            onClick={(e) => {
              e.preventDefault();
              SongCall("59c7c3289ca8c19ffb7e119527336290");
              songName("Best song ever");
            }}
          />
          <HocPlaylist
            header="browse"
            name="Bheegi si Bhaagi si"
            src={p26}
            duration="4:17"
            onClick={(e) => {
              e.preventDefault();
              SongCall("390caeea05abbe714dceef44fcb90f31");
              songName("Bheegi si bhaagi si");
            }}
          />
          <HocPlaylist
            header="browse"
            name="Call you mine"
            src={p7}
            duration="3:37"
            onClick={(e) => {
              e.preventDefault();
              SongCall("dac1eff31187a680f2522f59a2a56891");
              songName("Call you mine");
            }}
          />
          <HocPlaylist
            header="browse"
            name="Castle of Glass"
            src={p1}
            duration="3:25"
            onClick={(e) => {
              e.preventDefault();
              SongCall("f9b385f8f55d4e71f5c87bca5dd7398c");
              songName("Castle of glass");
            }}
          />
          <HocPlaylist
            header="browse"
            name="Closer"
            src={p5}
            duration="4:21"
            onClick={(e) => {
              e.preventDefault();
              SongCall("1c07ee053ce28b9f39eefeee63acf1b9");
              songName("Closer");
            }}
          />
          <HocPlaylist
            header="browse"
            name="Don't let me down"
            src={p6}
            duration="3:37"
            onClick={(e) => {
              e.preventDefault();
              SongCall("7ff0a2c1dac39b69e878ec7984d11977");
              songName("Don't let me down");
            }}
          />
          <HocPlaylist
            header="browse"
            name="Ek main aur Ekk tu"
            src={p28}
            duration="4:38"
            onClick={(e) => {
              e.preventDefault();
              SongCall("8b4eb1feedefe8ee092417bc59b47fa2");
              songName("Ek main aur ekk tu");
            }}
          />
          <HocPlaylist
            header="browse"
            name="Highway to Hell"
            src={p14}
            duration="3:27"
            onClick={(e) => {
              e.preventDefault();
              SongCall("7c3d655226638a58e6ccc75f72688143");
              songName("Highway to hell");
            }}
          />
          <HocPlaylist
            header="browse"
            name="Ijazat"
            src={p27}
            duration="4:41"
            onClick={(e) => {
              e.preventDefault();
              SongCall("d952cb820f8ab07496deff25f5560e1d");
              songName("Ijazat");
            }}
          />
          <HocPlaylist
            header="browse"
            name="Ilahi"
            src={p20}
            duration="3:23"
            onClick={(e) => {
              e.preventDefault();
              SongCall("61d65ea52fa8149b829acadf232b6694");
              songName("Ilahi");
            }}
          />
          <HocPlaylist
            header="browse"
            name="In the End"
            src={p2}
            duration="3:38"
            onClick={(e) => {
              e.preventDefault();
              SongCall("96314db77c240acc52079281e773d788");
              songName("In the end");
            }}
          />
          <HocPlaylist
            header="browse"
            name="Kabira"
            src={p21}
            duration="4:11"
            onClick={(e) => {
              e.preventDefault();
              SongCall("e17e5bc210e53898155e49da29c480a6");
              songName("Kabira");
            }}
          />
          <HocPlaylist
            header="browse"
            name="Night Changes"
            src={p12}
            duration="4:00"
            onClick={(e) => {
              e.preventDefault();
              SongCall("80ef92a58fdedb17711a8bb3315a532f");
              songName("Night changes");
            }}
          />
          <HocPlaylist
            header="browse"
            name="One Call Away"
            src={p25}
            duration="4:01"
            onClick={(e) => {
              e.preventDefault();
              SongCall("8af4773cffeae963b965f6768b94bc8e");
              songName("One call away");
            }}
          />
          <HocPlaylist
            header="browse"
            name="One more light"
            src={p4}
            duration="4:30"
            onClick={(e) => {
              e.preventDefault();
              SongCall("3baf39c75b2efc0a02535124993752c8");
              songName("One more light");
            }}
          />
          <HocPlaylist
            header="browse"
            name="Out of Control"
            src={p9}
            duration="2:44"
            onClick={(e) => {
              e.preventDefault();
              SongCall("4fdaa955993905d883d3f6b288163c76");
              songName("Out of control");
            }}
          />
          <HocPlaylist
            header="browse"
            name="Same Direction"
            src={p10}
            duration="3:19"
            onClick={(e) => {
              e.preventDefault();
              SongCall("f1567d96234140801cf282caa5804bb1");
              songName("Same direction");
            }}
          />
          <HocPlaylist
            header="browse"
            name="See You Again"
            src={p24}
            duration="3:57"
            onClick={(e) => {
              e.preventDefault();
              SongCall("b0039be99dd884f9f7fec9c8124ae3ae");
              songName("See you again");
            }}
          />
          <HocPlaylist
            header="browse"
            name="The Nights"
            src={p17}
            duration="3:10"
            onClick={(e) => {
              e.preventDefault();
              SongCall("a7a50797ea25543fc867a1675fa85116");
              songName("The nights");
            }}
          />
          <HocPlaylist
            header="browse"
            name="The Reason"
            src={p8}
            duration="4:10"
            onClick={(e) => {
              e.preventDefault();
              SongCall("68a1fa9fc6f2b189008e5673f1974cf7");
              songName("The reason");
            }}
          />
          <HocPlaylist
            header="browse"
            name="Thunderstruck"
            src={p16}
            duration="4:53"
            onClick={(e) => {
              e.preventDefault();
              SongCall("aeeff70bd592a87d6c32061a754cb1dc");
              songName("Thunderstruck");
            }}
          />
          <HocPlaylist
            header="browse"
            name="Waiting for Love"
            src={p19}
            duration="3:50"
            onClick={(e) => {
              e.preventDefault();
              SongCall("393bfe187ffae1e65bebbcdafb94ec1e");
              songName("Waiting for love");
            }}
          />
          <HocPlaylist
            header="browse"
            name="Wake Me Up"
            src={p18}
            duration="4:32"
            onClick={(e) => {
              e.preventDefault();
              SongCall("f1607aceab1bf909ae8ec6d92e055f6f");
              songName("Wake me up");
            }}
          />
          <HocPlaylist
            header="browse"
            name="We don't talk anymore"
            src={p23}
            duration="3:50"
            onClick={(e) => {
              e.preventDefault();
              SongCall("40a074a6ae84d38326297747c142ffe2");
              songName("We don't talk anymore");
            }}
          />
          <HocPlaylist
            header="browse"
            name="What I've Done"
            src={p3}
            duration="3:25"
            onClick={(e) => {
              e.preventDefault();
              SongCall("021fe2ed1239b0ac610c79350d9a0153");
              songName("What I've done");
            }}
          />
          <HocPlaylist
            header="browse"
            name="What makes you Beautiful"
            src={p11}
            duration="3:26"
            onClick={(e) => {
              e.preventDefault();
              SongCall("71c5da86bbff082ba449f24cc007a9e6");
              songName("What makes you beautiful");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Browse;
