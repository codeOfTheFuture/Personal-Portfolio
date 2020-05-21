import React, { useState } from "react";
import Project from "../components/Project";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/fontawesome";

const StyledIcon = styled(FontAwesomeIcon)`
  color: black;
  width: 50px;
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    color: darkgray;
    background-color: black;
  }

  @media only screen and (max-width: 600px) {
    /* width: 35px !important; */
    margin: 0 1em;
  }
`;

const projectsCarousel = ({ projects }) => {
  let [currentProject, setCurrentProject] = useState(0);

  const getProject = (direction) => {
    let nextProject = currentProject;
    if (direction === "left" && currentProject !== 0) {
      nextProject--;
      setCurrentProject(nextProject);
    }
    if (direction === "right" && currentProject !== projects.length - 1) {
      nextProject++;
      setCurrentProject(nextProject);
    }
  };

  return (
    <div className='container'>
      <div className='chevron-left' onClick={() => getProject("left")}>
        <StyledIcon icon={["fas", "chevron-circle-left"]} />
      </div>
      <div className='project'>
        {projects.map(
          (project, index) =>
            index === currentProject && (
              <Project project={project} key={index} />
            )
        )}
      </div>
      <div className='chevron-right' onClick={() => getProject("right")}>
        <StyledIcon icon={["fas", "chevron-circle-right"]} />
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2em;
          border: 2px solid black;
          border-radius: 5px;
        }
        @media only screen and (max-width: 600px) {
          .container {
            flex-wrap: wrap;
            width: 75%;
          }
          .container .chevron-left {
            order: 1;
          }
          .container .chevron-right {
            order: 2;
          }
          .container .project {
            order: 3;
          }
        }
      `}</style>
    </div>
  );
};

export default projectsCarousel;
