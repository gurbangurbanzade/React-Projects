import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Counter } from "./components/counter/counter";
import Counter5x5 from "./components/counter/counter5x5";
import CunterFromInput from "./components/counter/cunterFromInput";
import GetData from "./components/counter/getData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      hello
      <Counter />
      <Counter5x5 />
      <CunterFromInput />
      <GetData />
    </div>
  );
}

export default App;
