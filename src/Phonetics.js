import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

export default function Phonetics(props) {
  const audioIcon = <FontAwesomeIcon icon={faVolumeUp} />;
  console.log(props.phonetics);
  return (
    <div className="Phonetics">
      {props.phonetics.text}
      <br />
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        {audioIcon}
      </a>
    </div>
  );
}
