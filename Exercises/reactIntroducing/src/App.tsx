import { useState } from "react";
import User from "./components/User";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App container">
      <Navbar tittle="User App2" />
      <hr />
      <User name="Qurban" salary="1000" depatment="IT" />
      <User name="Kenan" salary="2000" depatment="IT" />
    </div>
  );
}

export default App;
