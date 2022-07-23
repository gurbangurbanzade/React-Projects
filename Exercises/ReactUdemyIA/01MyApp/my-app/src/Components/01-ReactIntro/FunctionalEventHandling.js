import React from "react";

function FunctionalEventHandling() {
  const handling = () => {
    console.log("kliklendi");
  };
  return (
    <div>
      <hr />
      <button onClick={handling}>Kliklendi</button>
    </div>
  );
}

export default FunctionalEventHandling;
