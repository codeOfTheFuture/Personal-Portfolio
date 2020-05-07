import React, { useState } from "react";
import Layout from "../components/Layout";
import Carousel from "../components/ProjectsCarousel";

const Projects = () => {
  const [projects] = useState([
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
    {
      title: "Dad Jokes",
      image: "/assets/DadJokes.PNG",
      link: "https://front-end.build-week-pt-dad-jokes.now.sh/",
      github: "https://github.com/codeOfTheFuture/Backend",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem amet ut, dolores ratione commodi quo minima aspernatur laudantium aut, odio debitis enim eaque, optio esse. Et praesentium fugiat ipsa ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem amet ut, dolores ratione commodi quo minima aspernatur laudantium aut, odio debitis enim eaque, optio esse. Et praesentium fugiat ipsa ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem amet ut, dolores ratione commodi quo minima aspernatur laudantium aut, odio debitis enim eaque, optio esse. Et praesentium fugiat ipsa ratione!",
    },
    {
      title: "World Problems Index",
      image: "/assets/WorldProblemIndex.PNG",
      link: "https://https://adoring-yonath-183148.netlify.app/",
      github: "https://github.com/codeOfTheFuture/Backend-1",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem amet ut, dolores ratione commodi quo minima aspernatur laudantium aut, odio debitis enim eaque, optio esse. Et praesentium fugiat ipsa ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem amet ut, dolores ratione commodi quo minima aspernatur laudantium aut, odio debitis enim eaque, optio esse. Et praesentium fugiat ipsa ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem amet ut, dolores ratione commodi quo minima aspernatur laudantium aut, odio debitis enim eaque, optio esse. Et praesentium fugiat ipsa ratione!",
    },
    {
      title: "Tabless Thursday",
      image: "/assets/TablessThursday.PNG",
      link: "https://tabless-thursday.jeff-oliver.com/",
      github: "https://github.com/codeOfTheFuture/User-Interface-1",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem amet ut, dolores ratione commodi quo minima aspernatur laudantium aut, odio debitis enim eaque, optio esse. Et praesentium fugiat ipsa ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem amet ut, dolores ratione commodi quo minima aspernatur laudantium aut, odio debitis enim eaque, optio esse. Et praesentium fugiat ipsa ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem amet ut, dolores ratione commodi quo minima aspernatur laudantium aut, odio debitis enim eaque, optio esse. Et praesentium fugiat ipsa ratione!",
    },
  ]);

  return (
    <Layout>
      <div className='projects'>
        {/* <h1>Projects</h1> */}
        <Carousel projects={projects} />
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
