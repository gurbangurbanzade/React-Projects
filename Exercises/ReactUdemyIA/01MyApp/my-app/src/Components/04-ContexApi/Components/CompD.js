import React, { useContext } from "react";
import { oldContext, newContext } from "../Contex/NewContext";
export function CompD() {
  const data2 = useContext(oldContext);
  const data3 = useContext(newContext);
  //   const context = useContext(contextValue);
  return (
    <div>
      <h1>CompD</h1>
      <p>{data2}</p>
      <p>{data3.ad}</p>
    </div>
  );
}

export default CompD;
