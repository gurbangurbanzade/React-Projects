import React, { useMemo } from "react";

const Memo = ({ data }) => {
  console.log("memo Update");
  return (
    <div>
      Number-
      <br />
      <h1>{JSON.stringify(data)}</h1>
    </div>
  );
};

export default React.memo(Memo);
