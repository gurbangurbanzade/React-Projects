import "./App.css";
import Salamla from "./Components/Salamla";
import Form from "./Components/Form";
import Kimlik from "./Components/Kimlik";
import Tema from "./Components/Tema";
import Saygac from "./Components/Saygac";
import FunctionalEventHandling from "./Components/FunctionalEventHandling";
import ClassEvent from "./Components/ClassEvent";
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
      <FunctionalEventHandling />
      <ClassEvent />
    </div>
  );
}

export default App;
