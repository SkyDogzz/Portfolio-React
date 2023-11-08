import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--background-color);

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
            font-weight: 600;

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
  Home: "#top",
  About: "#about",
  Contact: "#contact",
  Resume: "#Resume",
};

export default function Header() {
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
        <ThemeSwitcher />
      </div>
    </StyledHeader>
  );
}

function ThemeSwitcher() {
  return <p>Theme switch</p>;
}
