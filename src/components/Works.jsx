import styled from "styled-components";

const works = {
  "Portfolio": {
    description: "This portfolio",
    link: "/#",
    photo: "/images/portfolio.png",
  },
  "SkyDogzz": {
    description: "A website for a fictive company",
    link: "/#",
    photo: "/images/portfolio.png",
  },
  "SkyDogzz ": {
    description: "A website for a fictive company",
    link: "/#",
    photo: "/images/portfolio.png",
  },
  "SkyDogzz  ": {
    description: "A website for a fictive company",
    link: "/#",
    photo: "/images/portfolio.png",
  },
};

const StyledWorks = styled.div`
  padding: 1rem var(--offset);
  background: var(--background-color);

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
    justify-content: space-between;

    li {
      margin-left: 1rem;
      margin-bottom: 1rem;
      width: 45%;

      &:first-child {
        margin-left: 0;
      }

      a {
        text-decoration: none;
        color: var(--primary-color);
        font-weight: 300;

        .img-container {
          width: 30rem;
          height: 30rem;
          overflow: hidden;
          border-radius: 2rem;
          margin-bottom: 1rem;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.2s ease-in-out;

          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }
  }
`;

export default function Works() {
  return (
    <StyledWorks className="Works">
      <h1>Works</h1>
      <ul>
        {Object.keys(works).map((work, index) => (
          <Work key={index} info={work} />
        ))}
      </ul>
    </StyledWorks>
  );
}

function Work(props) {
  return (
    <li>
      <a href={works[props.info].link} target="_blank" rel="noreferrer">
        <div className="img-container">
          <img src={works[props.info].photo} alt={props.info} />
        </div>
        <p>{props.info}</p>
        <p>{works[props.info].description}</p>
      </a>
    </li>
  );
}
