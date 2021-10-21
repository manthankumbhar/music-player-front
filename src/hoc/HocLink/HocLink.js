import React from "react";
import { Link } from "react-router-dom";
import "./HocLink.scss";

function HocLink(props) {
  return (
    <div className="hoclink">
      <Link to={props.link}>
        <img src={props.src} alt="songs" className="hoclink__img" />
        <span className="hoclink__title">{props.title}</span>
      </Link>
    </div>
  );
}

export default HocLink;
