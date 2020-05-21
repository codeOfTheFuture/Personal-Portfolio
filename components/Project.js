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
        }
        .projectMain {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .projectMain img {
          width: 30vw;
          margin: 0 4em;
          padding: 0.2em;
          border: 1px solid black;
        }
        .projectMain .github-link {
          display: flex;
          justify-content: center;
          align-items: center;
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
          margin: 0.5em 2em 0 0;
          padding: 0 2em;
          height: 50vh;
          width: 30vw;
          overflow: scroll;
        }
        // .projectAbout::-webkit-scrollbar {
        //   width: 20px !important;
        // }
        // .projectAbout::-webkit-scrollbar-track {
        //   color: black !important;
        // }
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
          // .projectMain {
          //   margin-top: 10em;
          // }
          .projectMain a img {
            width: 280px;
          }
          .projectAbout {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: none;
          }
          .projectAbout p {
            padding: 0 3em;
          }
        }
      `}</style>
    </div>
  );
};

export default Project;
