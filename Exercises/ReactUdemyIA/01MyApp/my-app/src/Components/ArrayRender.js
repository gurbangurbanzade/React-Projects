import React from "react";
import Kitab from "./Kitab";

function ArrayRender() {
  //   const bList = ["kitab 1", "kitab 2", "kitab 3"];
  const bList = [
    { id: 1, name: "kitab 1", yazar: "yazar1" },
    { id: 2, name: "kitab 2", yazar: "yazar2" },
    { id: 3, name: "kitab 3", yazar: "yazar3" },
  ];

  return (
    <div>
      {bList.map((kitab, index) => (
        <Kitab key={index} props={kitab} />
      ))}
    </div>
  );
}

export default ArrayRender;
