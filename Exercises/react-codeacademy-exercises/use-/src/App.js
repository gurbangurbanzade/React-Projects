import logo from "./logo.svg";
import "./App.css";
import Memo from "./components/Memo";
import { useState } from "react";
import { useMemo } from "react";
import UseMemo from "./components/UseMemo";

function App() {
  const [number, setNumber] = useState(0);

  const data = useMemo(() => {
    return { name: "qurban", number: number };
  }, [number]);

  const artir = () => {
    setNumber(number + 1);
  };
  return (
    <div className="App">
      {/* <Memo data={data} /> */}
      <UseMemo />
      <hr />
      {number}
      <br />
      <button onClick={artir}>Artir</button>
    </div>
  );
}

export default App;
