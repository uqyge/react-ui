import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ActionsList from "./component/actionsList";
import Board from "./component/board";
import PropertyWindow from "./component/propertyWindow";
import { Divider } from "@material-ui/core";
import Music from "./actions/music";
import Web from "./actions/web";

// import DropList from "./component/DropList";

function App() {

  const [selected, setSelected] = useState("");
  const [keyDict, setKeyDict] = useState("");
  const [paramDict, setParamDict] = useState("");

  function handleClick(evt) {
    setSelected(evt);
  }

  function setKey(evt) {
    if (keyDict.length > 0) {
      const result = keyDict.filter(i => Object.keys(i)[0] !== Object.keys(evt)[0])
      setKeyDict([...result, evt])
    }
    else {
      setKeyDict([...keyDict, evt])
    }
  }

  function setParam(evt) {
    if (paramDict.length > 0) {
      const result = paramDict.filter(i => Object.keys(i)[0] !== Object.keys(evt)[0])
      setParamDict([...result, evt])
    }
    else {
      setParamDict([...paramDict, evt])
    }
  }

  const actionMap = {
    Music: <Music />,
    Web: <Web selected={selected}
      setParam={setParam}
      paramDict={paramDict} />
  };

  return (
    <div className="grid-container">
      <div className="Actions-list">
        <ActionsList></ActionsList>
      </div>
      <div className="board">
        <Board handleKeySelect={handleClick} setKey={setKey}></Board>
      </div>
      <Divider />
      <div className="property">
        <h1 onClick={() => {
          console.log('kd', keyDict)
          console.log('pd', paramDict)
        }
        }>PropertyWindow</h1>
        {/* <PropertyWindow selected={selected} setParam={setParam}> */}
        <PropertyWindow>
          <div>{Object.keys(selected)}</div>
          {actionMap[Object.values(selected)]}
        </PropertyWindow>
      </div>
    </div>
  );
}

export default App;
