import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import styled from "styled-components";

const StyledApp = styled.div`
  .custom-cursor {
    pointer-events: none;
    position: fixed;
    border-radius: 50%;
    background: white;
    opacity: 0.75;
    transition: width 0.1s ease-in-out, height 0.1s ease-in-out;
    width: 24px;
    height: 24px;
    transform: translate(-50%, -50%);
    z-index: 9999;
  }

  .custom-cursor.small {
    width: 24px;
    height: 24px;
  }

  .custom-cursor.large {
    width: 36px;
    height: 36px;
  }
`;

function App() {
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });
  const [cursorSize, setCursorSize] = useState("small");

  const handleMouseMove = (e) => {
    setCursorXY({ x: e.clientX, y: e.clientY });
  };

  const handleMouseOverClickable = () => {
    setCursorSize("large");
  };

  const handleMouseOutClickable = () => {
    setCursorSize("small");
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    // Ajoutez ici tous les éléments cliquables.
    const clickableElements = document.querySelectorAll("a, button, input, textarea");
    clickableElements.forEach((el) => {
      el.addEventListener("mouseover", handleMouseOverClickable);
      el.addEventListener("mouseout", handleMouseOutClickable);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clickableElements.forEach((el) => {
        el.removeEventListener("mouseover", handleMouseOverClickable);
        el.removeEventListener("mouseout", handleMouseOutClickable);
      });
    };
  }, []);

  return (
    <StyledApp className="App">
      <div
        className={`custom-cursor ${cursorSize}`}
        style={{
          left: `${cursorXY.x}px`,
          top: `${cursorXY.y}px`,
        }}
      />
      <Header />
      <Main />
    </StyledApp>
  );
}

export default App;
