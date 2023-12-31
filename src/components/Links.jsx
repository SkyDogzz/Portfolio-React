import styled from "styled-components";
import { ClearButton } from "./Button";

const links = {
  Github: "https://github.com/skydogzz",
  LinkedIn: "https://www.linkedin.com/in/thomas-stephan-8376b6172/",
  Email: "mailto:thomas.stephan@live.fr",
};

const StyledLinks = styled.div`
  background: var(--background-color);
  padding: 1rem var(--offset);

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-left: 1rem;

      &:first-child {
        margin-left: 0;
      }

      a {
        text-decoration: none;
        color: var(--primary-color);
        font-weight: 300;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export default function Links() {
  return (
    <StyledLinks className="Links"><ul>
        {Object.keys(links).map((link, index) => (
          <li key={index}>
            <a href={links[link]} target="_blank" rel="noreferrer" >
            <ClearButton text={link}></ClearButton>
            </a>
          </li>
        ))}
      </ul>
    </StyledLinks>
  );
}
