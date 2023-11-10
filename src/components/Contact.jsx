import styled from "styled-components";

const StyledContact = styled.div`
  background: var(--background-color);
  padding: 1rem var(--offset);
  color: var(--primary-color);

  h1 {
    margin-top: 5rem;
  }
  P {
    font-size: 10rem;
    font-weight: 300;
    line-height: 1;
  }
  a {
    text-decoration: none;
    color: var(--primary-color);
    font-weight: 300;
    transition: 0.2s ease-in-out;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;

    &:hover {
      scale: 1.2;
      background: var(--background-color-light);
    }
  }

  @media (max-width: 1440px) {
    p {
      font-size: 6rem;
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: 4rem;
    }
  }
`;

export default function Contact() {
  return (
    <StyledContact className="Contact">
      <h1>Contact</h1>
      <p>
        LET'S WORK <br />
        TOGETHER
      </p>
      <a href="mailto:thomas.stephan@live.fr">Send me an email</a>
    </StyledContact>
  );
}
