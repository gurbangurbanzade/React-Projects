import logo from "./logo.svg";
import "./App.css";
import Memo from "./components/Memo";
import { useState } from "react";
import { useMemo } from "react";
import UseMemo from "./components/UseMemo";
import { useCallback } from "react";

function App() {
  const [number, setNumber] = useState(0);

  const data = useMemo(() => {
    return { name: "qurban", number: number };
  }, [number]);

  const increment = useCallback(() => {
    setNumber((prevState) => prevState + 1);
  }, []);

  return (
    <div className="App">
      {/* <Memo data={data} /> */}
      <UseMemo increment={increment} />
      <hr />
      {number}
      <br />
    </div>
  );
}

export default App;
