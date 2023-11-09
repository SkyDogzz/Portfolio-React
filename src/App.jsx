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
    transition: width 0.25s cubic-bezier(0.8, -1, 0.2, 2), height 0.25s cubic-bezier(0.8, -1, 0.2, 2), opacity 0.1s ease-in-out;
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

  .custom-cursor.hide {
    opacity: 0;
  }
`;

function App() {
  const [cursorXY, setCursorXY] = useState({
    x: -100,
    y: -100,
  });
  const [cursorSize, setCursorSize] = useState("small");
  const [cursorVisible, setCursorVisible] = useState(true);

  const handleMouseMove = (e) => {
    setCursorXY({ x: e.clientX, y: e.clientY });
    setCursorVisible(true);
  };

  const handleMouseLeave = () => {
    setCursorVisible(false);
  };

  const handleMouseOverClickable = () => {
    setCursorSize("large");
  };

  const handleMouseOutClickable = () => {
    setCursorSize("small");
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Ajoutez ici tous les éléments cliquables.
    const clickableElements = document.querySelectorAll("a, button, input, textarea, .logo");
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
        className={`custom-cursor ${cursorSize} ${cursorVisible ? "" : "hide"}`}
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
