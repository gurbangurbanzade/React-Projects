import "./App.css";
import Salamla from "./Components/Salamla";
import Form from "./Components/Form";
import Kimlik from "./Components/Kimlik";
import Tema from "./Components/Tema";
import Saygac from "./Components/Saygac";
import FunctionalEventHandling from "./Components/FunctionalEventHandling";
import ClassEvent from "./Components/ClassEvent";
import Bind from "./Components/Bind";
import Parent from "./Components/Parent";
import SertliRender from "./Components/SertliRender";
import ArrayRender from "./Components/ArrayRender";
function App() {
  return (
    <div className="App">
      <ArrayRender />
      <hr />
      <SertliRender />
      <hr />
      <Parent />
      <hr />
      <Bind />
      <hr />
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
