import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const test = 28;
  const isAuth = false;
  return (
    <div className="App">
      <h4>1+1</h4>
      <h4> {1 + 1}</h4>
      <h4>qurbanQurbanzade</h4>
      <h4>{"qurbanQurbanzade".toUpperCase()}</h4>
      <h4>{test}</h4>
      <div>{isAuth ? <p>Qeydiyyat var</p> : <p>Qeydiyyat yoxdur</p>}</div>
    </div>
  );
}

export default App;
