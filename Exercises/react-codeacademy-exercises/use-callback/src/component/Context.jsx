import { createContext, useState } from "react";

const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [color, setColor] = useState("dark");

  const values = {
    color,
    setColor,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default Context;
