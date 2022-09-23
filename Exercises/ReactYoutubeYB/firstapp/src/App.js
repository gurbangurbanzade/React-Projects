import "./App.css";
import Navbar from "./components/Navbar";
import User from "./components/User";
import Users from "./components/User";

function App() {
  return (
    <div className="App">
      <Navbar title="User App" />
      <hr />
      <Users />
    </div>
  );
}

export default App;
