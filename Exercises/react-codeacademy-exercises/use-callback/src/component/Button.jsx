import React from "react";
import Context from "./Context";
import { useContext } from "react";

const Button = ({ children }) => {
  const { color, setColor } = useContext(Context);
  return (
    <div>
      Color-{color}
      <br />
      <button
        onClick={() => (color == "dark" ? setColor("blue") : setColor("dark"))}
      >
        Change
      </button>
    </div>
  );
};

export default Button;
