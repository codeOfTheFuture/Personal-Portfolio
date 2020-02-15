import React from "react";
import Layout from "../components/Layout";

const Projects = () => {
  return (
    <Layout>
      <div className='projects'>
        <h1>Projects</h1>

        <style jsx>{`
          .projects {
            height: 80vh;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Projects;
