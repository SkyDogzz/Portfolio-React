import styled from "styled-components";
import { BsLightningCharge as Lightning } from "react-icons/bs";

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: var(--header-background-gradient);
  shadow: 0 0 20px var(--header-background-gradient);

  .logo{
    color: var(--primary-color);
  }

  svg {
    color: var(--primary-color);
  }

  .menu {
    display: flex;
    align-items: center;
    gap: 1rem;

    .nav {
      ul {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          margin-left: 1rem;
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
      }
    }
  }
`;

const links = {
  Work: "#works",
  About: "#about",
  Resume: "/pdf/resume.pdf",
  Contact: "mailto:thomas.stephan@live.fr",
};

export default function Header({ setTheme }) {
  return (
    <StyledHeader>
      <div className="logo">
        <p>SkyDogzz.</p>
      </div>
      <div className="menu">
        <nav className="nav">
          <ul>
            {Object.keys(links).map((link, index) => (
              <li key={index}>
                <a href={links[link]}>{link}</a>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeSwitcher setTheme={setTheme} />
      </div>
    </StyledHeader>
  );
}

function ThemeSwitcher({ setTheme }) {
  const changeTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  return <Lightning size="1.2rem" onClick={changeTheme} />;
}
