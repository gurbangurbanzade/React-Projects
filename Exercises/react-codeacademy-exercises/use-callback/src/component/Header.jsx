import React from "react";
import Context from "./Context";
import { useContext } from "react";
export default function Header() {
  const { color, setColor } = useContext(Context);

  return (
    <div>
      Header Color -{color}
      <br />
      <button
        onClick={() => (color == "dark" ? setColor("blue") : setColor("dark"))}
      >
        Change
      </button>
      <hr />
    </div>
  );
}
