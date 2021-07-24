import React from "react";

function HocPlaylist(props) {
  var url = document.URL;
  var id = url.substring(url.lastIndexOf("/") + 1);
  console.log(url);
  console.log(id);
  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  );
}

export default HocPlaylist;
