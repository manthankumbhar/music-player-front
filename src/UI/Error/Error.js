import React from "react";
import "./Error.scss";
import logo from "../../Photos/logo.png";

export default function Error() {
  return (
    <div>
      <img src={logo} alt="logo" />
      <h1 className="h1-tag_error">4🐑4</h1>
      <h2 className="h2-tag_error">Page Not Found</h2>
    </div>
  );
}
