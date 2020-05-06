import React from "react";
import Project from "../components/Project";

const projectsCarousel = () => {
  const projects = [
    {
      title: "WanderLust",
      image: "/assets/Wanderlust.PNG",
      link: "https://wanderlust.jeff-oliver.com",
      github: "https://github.com/wanderlust-1-0",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem amet ut, dolores ratione commodi quo minima aspernatur laudantium aut, odio debitis enim eaque, optio esse. Et praesentium fugiat ipsa ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem amet ut, dolores ratione commodi quo minima aspernatur laudantium aut, odio debitis enim eaque, optio esse. Et praesentium fugiat ipsa ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem amet ut, dolores ratione commodi quo minima aspernatur laudantium aut, odio debitis enim eaque, optio esse. Et praesentium fugiat ipsa ratione!",
    },
  ];

  return (
    <div className='container'>
      <div className='leftChevron'>
        <i class='fa fa-chevron-left'></i>
      </div>
      <div className='project'>
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
      <div className='rightChevron'>
        <i class='fa fa-chevron-right'></i>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 5em;
        }
      `}</style>
    </div>
  );
};

export default projectsCarousel;
