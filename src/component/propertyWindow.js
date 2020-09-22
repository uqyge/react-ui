import React from "react";

const PropertyWindow = (props) => {
  console.log("props", props);
  return <div>{props.children}</div>;
};

export default PropertyWindow;
