import React, { useState, useEffect } from "react";

function HookSaygac() {
  const [saygac, setSaygac] = useState(0);
  const [ad, setAd] = useState("");

  useEffect(() => {
    document.title = `${saygac}- defe kliklendi`;
    console.log("deyisiklik oldu");
  }, [saygac]);
  return (
    <div>
      HookSaygac
      <hr />
      <input type="text" value={ad} onChange={(e) => setAd(e.target.value)} />
      <button onClick={() => setSaygac(saygac + 1)}>
        {saygac}-Defe kliklendi
      </button>
    </div>
  );
}

export default HookSaygac;
