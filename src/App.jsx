import Header from "./components/Header";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: aliceblue;
  height: 150vh;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
