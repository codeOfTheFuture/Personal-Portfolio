import React from "react";

const Project = ({ project }) => {
  return (
    <div className='projectContainer'>
      <div className='projectMain'>
        <a href={project.link} target='_blank'>
          <img src={project.image} alt={project.title} />
        </a>
        <h2>{project.title}</h2>
        <a href={project.github} target='_blank'>
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
        .projectAbout {
          margin-left: 4em;
          padding: 0 4em;
        }
        .projectAbout p {
          padding: 0;
          line-height: 2em;
        }
      `}</style>
    </div>
  );
};

export default Project;
