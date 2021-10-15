import React from "react";
import HocPlaylist from "../../../hoc/HocPlaylist/HocPlaylist";

const SearchList = ({ filteredSongs, songCall }) => {
  const filtered = filteredSongs.map((song) => {
    return (
      <HocPlaylist
        header="search"
        name={song.name}
        src={song.src}
        duration={song.duration}
        onClick={(e) => {
          e.preventDefault();
          songCall(song.id);
        }}
      />
    );
  });
  return <div>{filtered}</div>;
};

export default SearchList;
