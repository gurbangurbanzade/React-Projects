import logo from "./logo.svg";
import Context from "./component/Context";
import { ContextProvider } from "./component/Context";
import Container from "./component/Container";
import { UserContextProvider } from "./component/UserContext";
function App() {
  return (
    <>
      <ContextProvider>
        <UserContextProvider>
          <Container />
        </UserContextProvider>
      </ContextProvider>
    </>
  );
}

export default App;
