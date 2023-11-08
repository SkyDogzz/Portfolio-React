import styled from "styled-components";

const StyledApp = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;

  h1 {
    margin-bottom: 0;

    span {
      color: #61dafb;
    }
  }

  h2 {
    margin-top: 0;
    font-size: 1.2rem;

    ul {
      
  }

`;

function App() {
  return (
    <StyledApp className="App">
      <h1>Template ReactJS by <span>SkyDogzz</span></h1>
      <h2>Contient:
        <ul>
          <li>Styled Components</li>
        </ul>
      </h2>
    </StyledApp>
  );
}

export default App;
