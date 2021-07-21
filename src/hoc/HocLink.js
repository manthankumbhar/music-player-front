import React from "react";
import "./HocLink.scss";

function HocLink(props) {
  return (
    <div className="hoclink">
      <a href={props.link}>
        <img src={props.src} alt="songs" className="hoclink__img" />
        <span className="hoclink__title">{props.title}</span>
      </a>
    </div>
  );
}

export default HocLink;
