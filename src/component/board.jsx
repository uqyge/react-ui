import React, { useState } from "react";
import "../App.css";
import DropTarget from "./DropTarget";

const keyId = ["a", "b", "c", "d", "e", "f"];

const Board = (props) => {
  const [name, setName] = useState("");
  return (
    <div className="board-grid">
      {keyId.map((id) => (
        <div>
          <DropTarget
            onItemDropped={(item) => {
              setName({ ...name, [id]: item });
              // console.log(name);
            }}
          >
            <h2>{name[id]}</h2>
            <button
              draggable={true}
              onClick={() => {
                props.handleKeySelect(name[id]);
              }}
            >
              {name[id]}
            </button>
          </DropTarget>
        </div>
      ))}
    </div>
  );
};

export default Board;
