import React from "react";
import Layout from "../components/Layout";
import Carousel from "../components/ProjectsCarousel";

const Projects = () => {
  return (
    <Layout>
      <div className='projects'>
        {/* <h1>Projects</h1> */}
        <Carousel />
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
