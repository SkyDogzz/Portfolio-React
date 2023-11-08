import styled from "styled-components";

const works = {
  Portfolio: {
    description: "This portfolio",
    link: "/#",
    photo: "/images/portfolio.png",
  },
  SkyDogzz: {
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

const services = [
  {
    "Title": "Web Development",
    "Description": "I can build you a website from scratch or use a CMS like Wordpress.",
  },
  {
    "Title": "Web Development",
    "Description": "I can build you a website from scratch or use a CMS like Wordpress.",
  }
]

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
      margin-bottom: 2rem;
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
      }h3 {
        font-size: 1.5rem;
        font-weight: 300;
        color: var(--primary-color);
      }

        p {
          font-size: 1rem;
          font-weight: 300;
          color: var(--primary-color);
        }
    }
  }
`;


export default function Works() {
  return (
    <StyledWorks className="Works" id="works">
      <h1>Works</h1>
      <ul>
        {Object.keys(works).map((work, index) => (
          <Work key={index} info={work} />
        ))}
      </ul>
      <h2>Services</h2>
      <ul>
        {services.map((service, index) => (
          <Service key={index} info={service} />
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

function Service(props) {
  return <li>
    <h3>{props.info.Title}</h3>
    <p>{props.info.Description}</p>
  </li>;
}
