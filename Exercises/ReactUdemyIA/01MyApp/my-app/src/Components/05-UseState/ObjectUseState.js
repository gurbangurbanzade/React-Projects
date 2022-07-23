import React, { useState } from "react";

function ObjectUseState() {
  const [kimlik, setKimlik] = useState({ ad: "kenan", soyad: "qurbanzade" });
  return (
    <div>
      <input
        type="text"
        placeholder="ad"
        // value={kimlik.ad}
        onChange={(e) => setKimlik({ ...kimlik, ad: e.target.value })}
      />
      <input
        type="text"
        placeholder="soyad"
        // value={kimlik.soyad}

        onChange={(e) => setKimlik({ ...kimlik, soyad: e.target.value })}
      />
      <div>Ad:{kimlik.ad}</div>
      <div>Soyad:{kimlik.soyad}</div>
    </div>
  );
}

export default ObjectUseState;
