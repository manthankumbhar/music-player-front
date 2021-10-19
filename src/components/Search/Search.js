import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Search.scss";
import SearchInput from "react-search-input";
import axios from "axios";
import SearchList from "./SearchList/SearchList";
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

const Search = ({ childToParent, songName }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const updatedSearch = (term) => {
    setSearchTerm(term);
  };

  function SongCall(id) {
    axios
      .post(`https://monty-music-player.herokuapp.com/songs/${id}`)
      .then((res) => {
        var url = res.data["success"];
        childToParent(url);
      });
  }

  const sendSongName = (childData) => {
    console.log(childData);
    songName(childData);
  };

  const songList = [
    {
      id: "b802798e38c9afe0eccee62a3c79e914",
      name: "Back in Black",
      src: p15,
      duration: "4:13",
    },
    {
      id: "f672bb170c8b6cdd702c6e2252d6cff7",
      name: "Balam Pichkari",
      src: p22,
      duration: "4:19",
    },
    {
      id: "59c7c3289ca8c19ffb7e119527336290",
      name: "Best Song Ever",
      src: p13,
      duration: "3:18",
    },
    {
      id: "390caeea05abbe714dceef44fcb90f31",
      name: "Bheegi si Bhaagi si",
      src: p26,
      duration: "4:17",
    },
    {
      id: "dac1eff31187a680f2522f59a2a56891",
      name: "Call you mine",
      src: p7,
      duration: "3:37",
    },
    {
      id: "f9b385f8f55d4e71f5c87bca5dd7398c",
      name: "Castle of Glass",
      src: p1,
      duration: "3:25",
    },
    {
      id: "1c07ee053ce28b9f39eefeee63acf1b9",
      name: "Closer",
      src: p5,
      duration: "4:21",
    },
    {
      id: "7ff0a2c1dac39b69e878ec7984d11977",
      name: "Don't let me down",
      src: p6,
      duration: "3:37",
    },
    {
      id: "8b4eb1feedefe8ee092417bc59b47fa2",
      name: "Ek main aur ekk tu",
      src: p28,
      duration: "4:38",
    },
    {
      id: "7c3d655226638a58e6ccc75f72688143",
      name: "Highway to Hell",
      src: p14,
      duration: "3:27",
    },
    {
      id: "d952cb820f8ab07496deff25f5560e1d",
      name: "Ijazat",
      src: p27,
      duration: "4:41",
    },
    {
      id: "61d65ea52fa8149b829acadf232b6694",
      name: "Ilahi",
      src: p20,
      duration: "3:23",
    },
    {
      id: "96314db77c240acc52079281e773d788",
      name: "In the end",
      src: p2,
      duration: "3:38",
    },
    {
      id: "e17e5bc210e53898155e49da29c480a6",
      name: "Kabira",
      src: p21,
      duration: "4:11",
    },
    {
      id: "80ef92a58fdedb17711a8bb3315a532f",
      name: "Night Changes",
      src: p12,
      duration: "4:00",
    },
    {
      id: "8af4773cffeae963b965f6768b94bc8e",
      name: "One call away",
      src: p25,
      duration: "4:01",
    },
    {
      id: "3baf39c75b2efc0a02535124993752c8",
      name: "One more light",
      src: p4,
      duration: "4:30",
    },
    {
      id: "4fdaa955993905d883d3f6b288163c76",
      name: "Out of control",
      src: p9,
      duration: "2:44",
    },
    {
      id: "f1567d96234140801cf282caa5804bb1",
      name: "Same Direction",
      src: p10,
      duration: "3:19",
    },
    {
      id: "b0039be99dd884f9f7fec9c8124ae3ae",
      name: "See you again",
      src: p24,
      duration: "3:57",
    },
    {
      id: "a7a50797ea25543fc867a1675fa85116",
      name: "The Nights",
      src: p17,
      duration: "3:10",
    },
    {
      id: "68a1fa9fc6f2b189008e5673f1974cf7",
      name: "The Reason",
      src: p8,
      duration: "4:10",
    },
    {
      id: "aeeff70bd592a87d6c32061a754cb1dc",
      name: "Thunderstruck",
      src: p16,
      duration: "4:53",
    },
    {
      id: "393bfe187ffae1e65bebbcdafb94ec1e",
      name: "Waiting for love",
      src: p19,
      duration: "3:50",
    },
    {
      id: "f1607aceab1bf909ae8ec6d92e055f6f",
      name: "Wake me up",
      src: p18,
      duration: "4:32",
    },
    {
      id: "40a074a6ae84d38326297747c142ffe2",
      name: "We don't talk anymore",
      src: p23,
      duration: "3:50",
    },
    {
      id: "021fe2ed1239b0ac610c79350d9a0153",
      name: "What I've Done",
      src: p3,
      duration: "3:25",
    },
    {
      id: "71c5da86bbff082ba449f24cc007a9e6",
      name: "What makes you beautiful",
      src: p11,
      duration: "3:26",
    },
  ];

  const filteredSongs = songList.filter((song) => {
    return song.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  function searchResults() {
    return (
      <SearchList
        filteredSongs={filteredSongs}
        songCall={SongCall}
        songName={sendSongName}
      />
    );
  }

  return (
    <div className="search">
      <Sidebar />
      <div className="search__content">
        <div className="search__header">
          <h1 className="search__header--h1">Search Songs</h1>
          <SearchInput
            className="search__header--input search-input"
            onChange={updatedSearch}
          />
        </div>
        <div>{searchResults()}</div>
      </div>
    </div>
  );
};

export default Search;
