import React from "react";

const Web = (props) => {
  const id = Object.keys(props.selected)[0]
  const params = props.paramDict.length > 0 ? props.paramDict.filter(i => Object.keys(i)[0] === Object.keys(props.selected)[0]) : ''
  return (
    <div>
      <div>
        {params.length > 0 ? "Previous setting:" + Object.values(params[0])[0] : ""}
      </div>
      <input id="input-1" ></input>
      <button onClick={() => {
        const input1 = document.getElementById("input-1").value
        console.log('web', params)

        props.setParam({ [id]: input1 })
        // props.setParam({'wudi': input1 })
      }}>ok</button>
    </div >
  );
};

export default Web;
