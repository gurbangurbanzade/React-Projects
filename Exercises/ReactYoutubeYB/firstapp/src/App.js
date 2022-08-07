import "./App.css";
import Navbar from "./components/Navbar";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <Navbar title="User App" />
      <hr />
      <User department="IT" name="Qurban" salary="1000" />
    </div>
  );
}

export default App;