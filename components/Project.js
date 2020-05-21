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
        <p>{project.about}</p>
      </div>

      <style jsx>{`
        .projectContainer {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 10em;
        }
        .projectMain {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .projectMain .github-link {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 2em;
          text-decoration: none;
        }
        .projectMain .github-link:visited {
          color: black;
        }
        .projectAbout {
          margin-left: 4em;
          padding: 0 4em;
        }
        .projectAbout p {
          padding: 0;
          line-height: 2em;
        }
        @media only screen and (max-width: 600px) {
          .projectContainer {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0;
          }
          .projectMain {
            margin-top: 10em;
          }
          .projectMain a img {
            width: 280px;
          }
          .projectAbout {
            margin: 0;
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Project;
