import React from "react";
// import DropList from "./DropList";

const PropertyWindow = (props) => {
  console.log("props", props);
  return (
    <div>
      <div onClick={() => console.log('props', props)}>{props.children}</div>
    </div>
  );
};

export default PropertyWindow;
