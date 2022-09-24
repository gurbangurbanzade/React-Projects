import React from "react";
import Header from "./Header";
import Button from "./Button";
import { useContext } from "react";
import Context from "./Context";
import "../App.css";
import Profile from "./Profile";
export default function Container() {
  const { color, setColor } = useContext(Context);

  return (
    <div className={color}>
      <Header />
      <Button />
      <hr />
      <Profile />
    </div>
  );
}
