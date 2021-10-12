import React from "react";
import "./HocPlaylist.scss";
import sprite from "../../Photos/SVG/sprite.svg";

function HocPlaylist(props) {
  var url = document.URL;
  var lastIndex = url.substring(url.lastIndexOf("/") + 1);
  if (props.header === lastIndex) {
    return (
      <div className="hocplaylist">
        <svg className="hocplaylist__svg" onClick={props.onClick}>
          <use href={sprite + "#icon-controller-play"} />
        </svg>
        <img src={props.src} alt="song img" className="hocplaylist__img" />
        <h4 className="hocplaylist__heading-4">{props.name}</h4>
        <p className="hocplaylist__duration">{props.duration}</p>
      </div>
    );
  } else {
    return null;
  }
}

export default HocPlaylist;
