import React from "react";

function Kimlik() {
  //   return (
  //     <div id="name" className="box">
  //       <h1>Qurban Qurbanzade</h1>
  //     </div>
  //   );
  return React.createElement(
    "div",
    { id: "name", className: "box" },
    React.createElement("h1", null, "Qurban Qurbanzade")
  );
}

export default Kimlik;
