import React, { useMemo } from "react";

const Memo = ({ number, increment }) => {
  console.log("memo Update");
  return (
    <div>
      UseCalback
      <br />
      <h1>{number}</h1>
      <button onClick={increment}>Artir</button>
    </div>
  );
};

export default React.memo(Memo);
