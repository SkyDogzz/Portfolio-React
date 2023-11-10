import styled from "styled-components";

const StyledAbout = styled.div`
  background: var(--background-color);
  padding: 1rem var(--offset);
  color: var(--primary-color);

  h1 {
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.5;

    max-width: 60%;
  }

  @media (max-width: 1024px) {
    p {
      max-width: 100%;
    }
  }
`;

export default function About() {
  return (
    <StyledAbout id="about">
      <h1>About</h1>
      <p>
        Fuelled by a deep-seated passion for computing, I've carved my path through the tech world with both zeal and precision. Armed with a Bachelor's degree in Web Engineering from ESGI Paris, I've
        honed my skills in designing and developing digital solutions that stand at the intersection of innovation and usability. Currently, I'm advancing my expertise as I pursue a Master's degree in
        Web Engineering at the very same institute, where the pixels meet the code, and visions transform into virtual experiences. Join me on this digital odyssey as we explore the boundless
        possibilities of the web together.
      </p>
    </StyledAbout>
  );
}
