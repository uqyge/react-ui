import React from "react";
import "../App.css";

const keyId = ["1", "2", "3", "4", "5", "6"];

const Board = (props) => {
  return (
    <div className="board-grid">
      {keyId.map((id) => (
        <button
          onClick={() => {
            props.handleKeySelect({ id });
          }}
        >
          {id}
        </button>
      ))}
    </div>
  );
};

export default Board;
