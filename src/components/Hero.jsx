import styled from "styled-components";

const StyledHero = styled.section`
  height: 60vh;
  display: flex;
  justify-content: left;
  align-items: center;
  background: var(--background-color);
  padding: 0 var(--offset);

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
`;

export default function Hero() {
  return (
    <StyledHero className="hero">
      <div className="hero-content">
        <h1>Hi, I'm SkyDogzz.</h1>
        <p>
          I'm a full-stack web developer with a passion <br /> for learning and building things.
        </p>
      </div>
    </StyledHero>
  );
}
