import React from "react";

function ArrayRender() {
  const bList = ["kitab 1", "kitab 2", "kitab 3"];
  return (
    <div>
      {bList.map((book) => (
        <p>{book}</p>
      ))}
    </div>
  );
}

export default ArrayRender;
