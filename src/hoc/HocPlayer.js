import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";

function HocPlayer(props) {
  return <AudioPlayer autoPlay src={props.src} />;
}

export default HocPlayer;
