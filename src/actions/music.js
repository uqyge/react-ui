import { PinDropSharp } from "@material-ui/icons";
import React from "react";

const Music = (props) => {
  return (
    <button
      onClick={() => {
        props.btn("music");
      }}
    >
      Music
    </button>
  );
};

export default Music;
