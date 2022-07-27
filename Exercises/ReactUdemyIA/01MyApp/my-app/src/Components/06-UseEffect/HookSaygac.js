import React, { useState, useEffect } from "react";

function HookSaygac() {
  const [saygac, setSaygac] = useState(0);
  useEffect(() => {
    document.title = `${saygac}- defe kliklendi`;
  });
  return (
    <div>
      HookSaygac
      <hr />
      <button onClick={() => setSaygac(saygac + 1)}>
        {saygac}-Defe kliklendi
      </button>
    </div>
  );
}

export default HookSaygac;
