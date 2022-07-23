import React from "react";

function Inline() {
  const stil = {
    color: "red",
    fontSize: "40px",
  };
  return (
    <div>
      <h1 style={stil}>Inline basliq</h1>
      <p style={{ color: "blue", fontSize: "25px" }}>inline text</p>
    </div>
  );
}

export default Inline;
