import { useState } from "react";
import User from "./components/User";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App container">
      <h4 className="bg-primary">App Component</h4>
      <User />
    </div>
  );
}

export default App;
