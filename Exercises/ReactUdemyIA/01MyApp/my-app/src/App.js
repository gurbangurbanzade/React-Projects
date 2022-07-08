import "./App.css";
import Salamla from "./Components/Salamla";
import Form from "./Components/Form";
import Kimlik from "./Components/Kimlik";
import Tema from "./Components/Tema";
import Saygac from "./Components/Saygac";

function App() {
  return (
    <div className="App">
      <Salamla />
      <Form />
      <Kimlik name="Qurban " />
      <Kimlik name="Kenan " surname="Qurbanzade" />
      <Kimlik>
        <p>Bu bir children elementdir</p>
      </Kimlik>
      <Tema />
      <Saygac />
    </div>
  );
}

export default App;
