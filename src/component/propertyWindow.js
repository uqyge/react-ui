import React from "react";
// import DropList from "./DropList";

const PropertyWindow = (props) => {
  console.log("props", props);
  return (
    <div>
      <div>{props.children}</div>
      {/* <DropList></DropList> */}
    </div>
  );
};

export default PropertyWindow;
