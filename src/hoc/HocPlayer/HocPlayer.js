import React from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";
import "./HocPlayer.scss";

function HocPlayer(props) {
  return (
    <div className="hocplayer">
      <AudioPlayer
        autoPlay
        src={props.src}
        className="hocplayer__player"
        customAdditionalControls={[
          <h1 className="hocplayer__header">
            Playing:{" "}
            {props.songName === "" || props.songName === undefined
              ? "None"
              : props.songName}
          </h1>,
        ]}
        customControlsSection={[
          RHAP_UI.ADDITIONAL_CONTROLS,
          RHAP_UI.MAIN_CONTROLS,
          RHAP_UI.VOLUME_CONTROLS,
        ]}
      />
    </div>
  );
}

export default HocPlayer;
