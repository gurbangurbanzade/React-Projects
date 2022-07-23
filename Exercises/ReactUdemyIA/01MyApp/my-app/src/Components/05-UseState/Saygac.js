import React, { useState } from "react";

function Saygac() {
  const [saygac, setSaygac] = useState(0);
  return (
    <div>
      <p>Saygac:{saygac} </p>
      <button onClick={() => setSaygac((saygacPre) => saygacPre + 1)}>
        Artir
      </button>
      <button onClick={() => setSaygac((saygacPre) => saygacPre - 1)}>
        Azalt
      </button>
      <button onClick={() => setSaygac((saygacPre) => 0)}>Sıfırla</button>
    </div>
  );
}

export default Saygac;
