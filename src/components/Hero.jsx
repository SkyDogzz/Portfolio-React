import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const StyledHero = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: left;
  align-items: center;
  background: var(--background-color);
  padding: 0 var(--offset);
  border-bottom : 1px solid var(--primary-color);

  .hero-content {
    h1 {
      font-size: 4.5rem;
      font-weight: 600;
      color: var(--primary-color);
    }
    p {
      font-size: 3rem;
      font-weight: 300;
      color: var(--primary-color);
    }
  }
  overflow: hidden; // Empêche les étincelles de déborder
`;

const Sparkle = styled.div`
  position: absolute;
  width: 10px; // Taille de l'étincelle
  height: 10px; // Taille de l'étincelle
  background-color: #fff; // Couleur de l'étincelle
  border-radius: 50%;
  pointer-events: none; // Assure que les étincelles ne perturbent pas les événements de la souris
  opacity: 0.8; // Ajustez l'opacité de l'étincelle
  // Ajoutez ici toute autre style pour vos étincelles
`;

export default function Hero() {
  const [sparkles, setSparkles] = useState([]);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculez la position relative à la section hero
      const rect = heroRef.current.getBoundingClientRect();
      const posX = e.clientX - rect.left - 5;
      const posY = e.clientY - rect.top - 5;

      // Créez une nouvelle étincelle
      const colors = ["#f8b500", "#f6416c", "#00ff00"];
      const newSparkle = {
        id: Date.now(),
        x: posX,
        y: posY,
        color: colors[Math.floor(Math.random() * colors.length)],
      };

      // Mettez à jour l'état avec la nouvelle étincelle
      setSparkles((prevSparkles) => [...prevSparkles, newSparkle]);

      // Supprimez l'étincelle après 1 seconde
      setTimeout(() => {
        setSparkles((prevSparkles) => prevSparkles.filter((s) => s.id !== newSparkle.id));
      }, 1000);
    };

    const heroElement = heroRef.current;
    heroElement.addEventListener("mousemove", handleMouseMove);

    return () => {
      heroElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <StyledHero className="hero" ref={heroRef}>
      {sparkles.map((sparkle) => (
        <Sparkle key={sparkle.id} style={{ left: sparkle.x, top: sparkle.y, background: sparkle.color }} />
      ))}
      <div className="hero-content">
        <h1>Hi, I'm Thomas Stephan.</h1>
        <p>
          I'm a full-stack web developer with a <br /> 
          passion for learning and building things <br />
          based in Paris, France.
        </p>
      </div>
    </StyledHero>
  );
}
