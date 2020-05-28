import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/fontawesome";

const StyledIcon = styled(FontAwesomeIcon)`
  color: "black";
  width: 18px;
  margin: 0 1em;

  @media only screen and (max-width: 600px) {
    /* margin: 0 0.4em; */
  }
`;

const Project = ({ project }) => {
  return (
    <div className='projectContainer'>
      <div className='projectMain'>
        <h2>{project.title}</h2>
        <a href={project.link} target='_blank'>
          <img src={project.image} alt={project.title} />
        </a>
        <a href={project.github} target='_blank' className='github-link'>
          <StyledIcon icon={["fab", "github"]} />
          View Github
        </a>
      </div>

      <div className='projectAbout'>
        <h3>{project.about.projectDesc}</h3>
        <p>{project.about.projectDescText}</p>
        <h3>{project.about.techStack}</h3>
        <p>{project.about.techStackList}</p>
        <ul>
          {project.about.bulletPoints.map((bulletPoint, index) => {
            return <li key={index}>{bulletPoint}</li>;
          })}
        </ul>
      </div>

      <style jsx>{`
        .projectContainer {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin: 0 2em;
        }
        .projectMain {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 0 2em;
        }
        .projectMain img {
          width: 30vw;
          padding: 0.2em;
          border: 1px solid black;
        }
        .projectMain .github-link {
          display: flex;
          justify-content: center;
          align-items: center;
          color: black;
          margin-top: 0.5em;
          text-decoration: none;
          padding: 0.5em 2em;
          border: 1px solid black;
          border-radius: 5px;
          font-weight: bold;
        }
        .projectMain .github-link:hover {
          color: black;
          background-color: darkgrey;
        }
        .projectMain .github-link:visited {
          color: black;
        }
        .projectAbout {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          margin: 0.5em 2em;
          padding: 0 1em;
          height: 50vh;
          width: 30vw;
          line-height: 2em;
          overflow-y: scroll;
        }
        .projectAbout::-webkit-scrollbar {
          width: 8px;
          background: whitesmoke;
        }
        .projectAbout::-webkit-scrollbar-track {
          box-shadow: inset 0 0 5px grey;
          border-radius: 10px;
        }
        .projectAbout::-webkit-scrollbar-thumb {
          background: darkgrey;
          border-radius: 10px;
          height: 50px;
        }
        .projectAbout p {
          padding: 0;
        }
        @media only screen and (max-width: 600px) {
          .projectContainer {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0;
          }
          .projectMain a img {
            width: 280px;
          }
          .projectAbout {
            margin-top: 2em;
            padding: 0 1em;
            width: 70%;
            height: 100%;
            overflow-y: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Project;
