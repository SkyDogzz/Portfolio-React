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
    Title: "ReactJS Custom Development",
    Description: "Crafting tailored ReactJS solutions to bring your unique ideas to life with clean, efficient, and scalable code.",
  },
  {
    Title: "ReactJS UI/UX Design",
    Description: "Designing intuitive and dynamic user interfaces with ReactJS that provide seamless user experiences across all devices.",
  },
  {
    Title: "React Single Page Applications (SPA)",
    Description: "Building fast and responsive single-page applications with ReactJS that offer users a smooth and cohesive online journey.",
  },
  {
    Title: "ReactJS Plugin Development",
    Description: "Developing custom ReactJS plugins to extend the functionality of your web applications, ensuring compatibility and performance.",
  },
  {
    Title: "ReactJS Code Audit & Optimization",
    Description: "Conducting thorough code reviews and optimization to enhance the performance and maintainability of your ReactJS projects.",
  },
  {
    Title: "ReactJS Support & Maintenance",
    Description: "Providing ongoing support and maintenance services to keep your ReactJS applications up-to-date and running smoothly.",
  }
];

const StyledWorks = styled.div`
  padding: 1rem var(--offset);
  background: var(--background-color);

  h1,
  h2 {
    margin-bottom: 2rem;
  }

  .service {
    padding: 1rem 2rem;
    border-radius: 2rem;

    transition: 0.2s ease-in-out;

    &:hover {
      scale: 1.2;
      background: var(--background-color-light);
    }
  }

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
      h3 {
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
  return (
    <li className="service">
      <h3>{props.info.Title}</h3>
      <p>{props.info.Description}</p>
    </li>
  );
}
