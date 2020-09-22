import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ActionsList from "./component/actionsList";
import Board from "./component/board";
import PropertyWindow from "./component/propertyWindow";
import { Divider } from "@material-ui/core";
import Music from "./actions/music";
import Web from "./actions/web";

const actionType = "music";

function App() {
  const keyMap = { 1: <Music btn={handleClick} />, 2: <Web /> };
  function handleClick(evt) {
    console.log("clicked", evt);
    console.log("selected", selected);
    setSelected(evt);
  }

  const [selected, setSelected] = useState("");
  return (
    <div className="grid-container">
      <div className="Actions-list">
        <ActionsList></ActionsList>
        {/* <div>test</div> */}
      </div>
      <div className="board">
        <Board handleKeySelect={handleClick}></Board>
      </div>
      <Divider />
      <div className="property">
        <PropertyWindow selected={selected}>
          {keyMap[selected.id]}

          {/* <button
            onClick={() => {
              console.log(selected);
            }}
          /> */}
        </PropertyWindow>
      </div>
    </div>
  );
}

export default App;
