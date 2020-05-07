import React, { useState } from "react";
import Project from "../components/Project";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/fontawesome";

const StyledIcon = styled(FontAwesomeIcon)`
  color: black;
  width: 50px;
  cursor: pointer;
`;

const projectsCarousel = () => {
  let [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "Cryptolitic",
      image: "/assets/Cryptolitic.PNG",
      link: "https://https://cryptolytic-production.netlify.app/main/home",
      github: "https://github.com/Lambda-School-Labs/cryptolytic-fe",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem amet ut, dolores ratione commodi quo minima aspernatur laudantium aut, odio debitis enim eaque, optio esse. Et praesentium fugiat ipsa ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem amet ut, dolores ratione commodi quo minima aspernatur laudantium aut, odio debitis enim eaque, optio esse. Et praesentium fugiat ipsa ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem amet ut, dolores ratione commodi quo minima aspernatur laudantium aut, odio debitis enim eaque, optio esse. Et praesentium fugiat ipsa ratione!",
    },
    {
      title: "WanderLust",
      image: "/assets/Wanderlust.PNG",
      link: "https://wanderlust.jeff-oliver.com",
      github: "https://github.com/wanderlust-1-0",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem amet ut, dolores ratione commodi quo minima aspernatur laudantium aut, odio debitis enim eaque, optio esse. Et praesentium fugiat ipsa ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem amet ut, dolores ratione commodi quo minima aspernatur laudantium aut, odio debitis enim eaque, optio esse. Et praesentium fugiat ipsa ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem amet ut, dolores ratione commodi quo minima aspernatur laudantium aut, odio debitis enim eaque, optio esse. Et praesentium fugiat ipsa ratione!",
    },
  ];

  const getProject = (projectsArray, direction) => {
    let nextProject = currentProject;
    if (direction === "left" && currentProject !== 0) {
      nextProject--;
      setCurrentProject(nextProject);
    }
    if (direction === "right" && currentProject !== projects.length - 1) {
      nextProject++;
      setCurrentProject(nextProject);
    }
    console.log(currentProject);
  };

  return (
    <div className='container'>
      <div onClick={() => getProject(projects, "left")}>
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
      <div onClick={() => getProject(projects, "right")}>
        <StyledIcon icon={["fas", "chevron-circle-right"]} />
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 20em 5em 5em 5em;
        }
      `}</style>
    </div>
  );
};

export default projectsCarousel;
