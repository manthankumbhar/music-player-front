import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";
import "./HocPlayer.scss";

function HocPlayer(props) {
  return (
    <div className="hocplayer">
      <AudioPlayer
        autoPlay
        src={props.src}
        className="hocplayer__player"
        onPlay={() => console.log("playing")}
        onPause={() => console.log("pause")}
      />
      ;
    </div>
  );
}

export default HocPlayer;
