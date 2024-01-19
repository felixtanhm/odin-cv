import React from "react";

function ButtonGroup({ onCancel }) {
  return (
    <div>
      <button onClick={onCancel}>Cancel</button>
      <button>Save</button>
    </div>
  );
}

export default ButtonGroup;
