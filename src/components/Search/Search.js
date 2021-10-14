import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Search.scss";
import SearchInput from "react-search-input";
import HocPlaylist from "../../hoc/HocPlaylist/HocPlaylist";
import axios from "axios";

const Search = ({ childToParent }) => {
  //   const [searchTerm, setSearchTerm] = useState("");
  //   console.log(searchTerm);

  //   const updatedSearch = (term) => {
  // setSearchTerm(term);
  //   };

  function SongCall(id) {
    axios
      .post(`https://monty-music-player.herokuapp.com/songs/${id}`)
      .then((res) => {
        var url = res.data["success"];
        childToParent(url);
      });
  }

  return (
    <div className="search">
      <Sidebar />
      <div className="search__content">
        <div className="search__header">
          <h1 className="search__header--h1">Search Songs</h1>
          <SearchInput
            className="search__header--input search-input"
            // onChange={updatedSearch}
          />
        </div>
        <div>
          <HocPlaylist
            header="search"
            name="Castle of Glass"
            src="https://picsum.photos/261"
            duration="3:25"
            onClick={(e) => {
              e.preventDefault();
              SongCall("f9b385f8f55d4e71f5c87bca5dd7398c");
            }}
          />
          <HocPlaylist
            header="search"
            name="In the End"
            src="https://picsum.photos/262"
            duration="3:38"
            onClick={(e) => {
              e.preventDefault();
              SongCall("96314db77c240acc52079281e773d788");
            }}
          />
          <HocPlaylist
            header="search"
            name="What I've Done"
            src="https://picsum.photos/263"
            duration="3:25"
            onClick={(e) => {
              e.preventDefault();
              SongCall("021fe2ed1239b0ac610c79350d9a0153");
            }}
          />
          <HocPlaylist
            header="search"
            name="One more light"
            src="https://picsum.photos/264"
            duration="4:30"
            onClick={(e) => {
              e.preventDefault();
              SongCall("3baf39c75b2efc0a02535124993752c8");
            }}
          />
          <HocPlaylist
            header="search"
            name="Closer"
            src="https://picsum.photos/266"
            duration="4:21"
            onClick={(e) => {
              e.preventDefault();
              SongCall("1c07ee053ce28b9f39eefeee63acf1b9");
            }}
          />
          <HocPlaylist
            header="search"
            name="Don't let me down"
            src="https://picsum.photos/267"
            duration="3:37"
            onClick={(e) => {
              e.preventDefault();
              SongCall("7ff0a2c1dac39b69e878ec7984d11977");
            }}
          />
          <HocPlaylist
            header="search"
            name="Call you mine"
            src="https://picsum.photos/268"
            duration="3:37"
            onClick={(e) => {
              e.preventDefault();
              SongCall("dac1eff31187a680f2522f59a2a56891");
            }}
          />
          <HocPlaylist
            header="search"
            name="The Reason"
            src="https://picsum.photos/270"
            duration="4:10"
            onClick={(e) => {
              e.preventDefault();
              SongCall("68a1fa9fc6f2b189008e5673f1974cf7");
            }}
          />
          <HocPlaylist
            header="search"
            name="Out of Control"
            src="https://picsum.photos/271"
            duration="2:44"
            onClick={(e) => {
              e.preventDefault();
              SongCall("4fdaa955993905d883d3f6b288163c76");
            }}
          />
          <HocPlaylist
            header="search"
            name="Same Direction"
            src="https://picsum.photos/272"
            duration="3:19"
            onClick={(e) => {
              e.preventDefault();
              SongCall("f1567d96234140801cf282caa5804bb1");
            }}
          />
          <HocPlaylist
            header="search"
            name="What makes you Beautiful"
            src="https://picsum.photos/273"
            duration="3:26"
            onClick={(e) => {
              e.preventDefault();
              SongCall("71c5da86bbff082ba449f24cc007a9e6");
            }}
          />
          <HocPlaylist
            header="search"
            name="Night Changes"
            src="https://picsum.photos/274"
            duration="4:00"
            onClick={(e) => {
              e.preventDefault();
              SongCall("80ef92a58fdedb17711a8bb3315a532f");
            }}
          />
          <HocPlaylist
            header="search"
            name="Best Song Ever"
            src="https://picsum.photos/275"
            duration="3:18"
            onClick={(e) => {
              e.preventDefault();
              SongCall("59c7c3289ca8c19ffb7e119527336290");
            }}
          />
          <HocPlaylist
            header="search"
            name="Highway to Hell"
            src="https://picsum.photos/276"
            duration="3:27"
            onClick={(e) => {
              e.preventDefault();
              SongCall("7c3d655226638a58e6ccc75f72688143");
            }}
          />
          <HocPlaylist
            header="search"
            name="Back in Black"
            src="https://picsum.photos/277"
            duration="4:13"
            onClick={(e) => {
              e.preventDefault();
              SongCall("b802798e38c9afe0eccee62a3c79e914");
            }}
          />
          <HocPlaylist
            header="search"
            name="Thunderstruck"
            src="https://picsum.photos/278"
            duration="4:53"
            onClick={(e) => {
              e.preventDefault();
              SongCall("aeeff70bd592a87d6c32061a754cb1dc");
            }}
          />
          <HocPlaylist
            header="search"
            name="The Nights"
            src="https://picsum.photos/279"
            duration="3:10"
            onClick={(e) => {
              e.preventDefault();
              SongCall("a7a50797ea25543fc867a1675fa85116");
            }}
          />
          <HocPlaylist
            header="search"
            name="Wake Me Up"
            src="https://picsum.photos/280"
            duration="4:32"
            onClick={(e) => {
              e.preventDefault();
              SongCall("f1607aceab1bf909ae8ec6d92e055f6f");
            }}
          />
          <HocPlaylist
            header="search"
            name="Waiting for Love"
            src="https://picsum.photos/281"
            duration="3:50"
            onClick={(e) => {
              e.preventDefault();
              SongCall("393bfe187ffae1e65bebbcdafb94ec1e");
            }}
          />
          <HocPlaylist
            header="search"
            name="Ilahi"
            src="https://picsum.photos/282"
            duration="3:23"
            onClick={(e) => {
              e.preventDefault();
              SongCall("61d65ea52fa8149b829acadf232b6694");
            }}
          />
          <HocPlaylist
            header="search"
            name="Kabira"
            src="https://picsum.photos/283"
            duration="4:11"
            onClick={(e) => {
              e.preventDefault();
              SongCall("e17e5bc210e53898155e49da29c480a6");
            }}
          />
          <HocPlaylist
            header="search"
            name="Balam Pichkari"
            src="https://picsum.photos/284"
            duration="4:19"
            onClick={(e) => {
              e.preventDefault();
              SongCall("f672bb170c8b6cdd702c6e2252d6cff7");
            }}
          />
          <HocPlaylist
            header="search"
            name="We don't talk anymore"
            src="https://picsum.photos/285"
            duration="3:50"
            onClick={(e) => {
              e.preventDefault();
              SongCall("40a074a6ae84d38326297747c142ffe2");
            }}
          />
          <HocPlaylist
            header="search"
            name="See You Again"
            src="https://picsum.photos/286"
            duration="3:57"
            onClick={(e) => {
              e.preventDefault();
              SongCall("b0039be99dd884f9f7fec9c8124ae3ae");
            }}
          />
          <HocPlaylist
            header="search"
            name="One Call Away"
            src="https://picsum.photos/287"
            duration="4:01"
            onClick={(e) => {
              e.preventDefault();
              SongCall("8af4773cffeae963b965f6768b94bc8e");
            }}
          />
          <HocPlaylist
            header="search"
            name="Bheegi si Bhaagi si"
            src="https://picsum.photos/288"
            duration="4:17"
            onClick={(e) => {
              e.preventDefault();
              SongCall("390caeea05abbe714dceef44fcb90f31");
            }}
          />
          <HocPlaylist
            header="search"
            name="Ijazat"
            src="https://picsum.photos/289"
            duration="4:41"
            onClick={(e) => {
              e.preventDefault();
              SongCall("d952cb820f8ab07496deff25f5560e1d");
            }}
          />
          <HocPlaylist
            header="search"
            name="Ek main aur Ekk tu"
            src="https://picsum.photos/290"
            duration="4:38"
            onClick={(e) => {
              e.preventDefault();
              SongCall("8b4eb1feedefe8ee092417bc59b47fa2");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
