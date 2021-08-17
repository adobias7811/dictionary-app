import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import "./Phonetics.css";

export default function Phonetics(props) {
  const audioIcon = <FontAwesomeIcon icon={faVolumeUp} />;
  console.log(props.phonetics);
  return (
    <div className="Phonetics">
      <span className="text">{props.phonetics.text}</span>
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        {audioIcon}
      </a>
    </div>
  );
}
