import React, { useState } from "react";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import Carousel from "../components/ProjectsCarousel";

const Projects = () => {
  const [projects] = useState([
    {
      title: "Cryptolitic",
      image: "/assets/Cryptolitic.PNG",
      link: "https://cryptolytic-production.netlify.app/main/home",
      github: "https://github.com/Lambda-School-Labs/cryptolytic-fe",
      about: {
        projectDesc: "Project description: ",
        projectDescText:
          "Developed to help people new to cryptocurrency understand arbitrage trading between exchanges. Provides trading recommendations and historical arbitrage data to save users time from doing their own technical analysis.",
        techStack: "Tech Stack: ",
        techStackList:
          "React | Redux | Canvas Js | Node Js | Express Js | Firebase authentication",
        bulletPoints: [
          "Contributed primarily on the react front-end along with some back-end contributions integrating the firebase admin SDK.",
          "Built candlestick chart using Canvas Js to display data from a data science PostgreSQL database.",
          "Collaborated with a team of 5 web developers and 3 data scientists to complete the project within a 6-week deadline.",
        ],
      },
    },
    {
      title: "WanderLust",
      image: "/assets/Wanderlust.PNG",
      link: "https://wanderlust.jeff-oliver.com",
      github: "https://github.com/wanderlust-1-0",
      about: {
        projectDesc: "Project description: ",
        projectDescText:
          "Provides an Airbnb like platform for travelers and guides to match up. Tourists should have a fun experience visiting a foreign place so the app makes it easy to find tours to book. Guides are able to utilize the platform to insert and edit their own tours that will be displayed to tourists.",
        techStack: "Tech Stack: ",
        techStackList: "React | Redux | JWT | Java | Spring Boot | PostgreSQL",
        bulletPoints: [
          "Developed front-end components based on UI design file specifications.",
          "Worked extensively with application-level state management using Redux.",
          "Collaborated with 1 other front-end developer, 1 back-end developer, and 1 UI/UX developer.",
        ],
      },
    },
    {
      title: "Dad Jokes",
      image: "/assets/DadJokes.PNG",
      link: "https://front-end.build-week-pt-dad-jokes.now.sh/",
      github: "https://github.com/codeOfTheFuture/Backend",
      about: {
        projectDesc: "Project description: ",
        projectDescText:
          "Built with a simple design and easy search functionality to allow for a single location to view and share your favorite dad (or bad??) jokes. No more losing your list of jokes and forgetting which ones had the best reactions.",
        techStack: "Tech Stack: ",
        techStackList:
          "React | Redux | Material-UI | Node Js | Express Js | Knex Js | Sqlite 3",
        bulletPoints: [
          "Solely responsible for back-end development using Node JS and Express.",
          "Created schema for database tables using Knex JS.",
          "Built endpoints for data to be consumed by front-end react application.",
        ],
      },
    },
    {
      title: "World Problems Index",
      image: "/assets/WorldProblemIndex.PNG",
      link: "https://adoring-yonath-183148.netlify.app/",
      github: "https://github.com/codeOfTheFuture/Backend-1",
      about: {
        projectDesc: "Project description: ",
        projectDescText:
          "Developed to investigate world issues, rally behind a solution and use technology to solve problems around the world. We use use the power of numbers to amplify our voice and get issues resolved.",
        techStack: "Tech Stack: ",
        techStackList: "React | Redux | Node Js | Mongoose | MongoDb",
        bulletPoints: [
          "Contributed in two different roles, as project manager as well as back-end developer.",
          "As project manager, I was responsible for leadership for the team, setup of a Trello Board, setup of a github organization and repositories, hosting a daily standup, and assisting team members with any blockers",
          "As back-end developer, I was solely responsible for developing a REST api using Node Js and Express Js, and creating a database using MongoDb Atlas.",
        ],
      },
    },
    {
      title: "Tabless Thursday",
      image: "/assets/TablessThursday.PNG",
      link: "https://tabless-thursday.jeff-oliver.com/",
      github: "https://github.com/codeOfTheFuture/User-Interface-1",
      about: {
        projectDesc: "Project description: ",
        projectDescText:
          "Developed for a user to be able to create, edit, and delete url links as well as group them within user created catagories. Users also have the ability to make a detailed summery for each webpage to document activity or take notes",
        techStack: "Tech Stack: ",
        techStackList: "HTML | CSS  | JavaScript (ES6+)",
        bulletPoints: [
          "Contributed primarily on building a marketing page using HTML, CSS, and JavaScript",
          "Built a landing page with a call to action link to the react application.",
          "Collaborated with the front-end react developer to develop a general UI design theme, fonts, color scheme, etc., to be implemented across marketing-page and react application.",
        ],
      },
    },
  ]);

  return (
    <Layout>
      <Navigation />
      <div className='projects'>
        <h1>Portfolio</h1>
        <Carousel projects={projects} />
        <style jsx>{`
          .projects {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .projects h1 {
            font-family: Montserrat;
            background-color: lightgrey;
            letter-spacing: 2px;
            padding: 0.3em 0.5em;
            border: 1px solid black;
            border-radius: 20px;
            box-shadow: 0 0 0 4px whitesmoke;
          }
          @media only screen and (max-width: 600px) {
            .projects {
              // width: 80%;
            }
            .projects h1 {
              margin: 3em 0 1em 0;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Projects;
