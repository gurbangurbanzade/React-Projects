import { useState } from "react";
import User from "./components/User";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h4>App Component</h4>
      <User />
      <User />
      <User />
    </div>
  );
}

export default App;
