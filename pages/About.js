import React from "react";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import SkillsIcons from "../components/SkillsIcons";

const About = () => {
  return (
    <Layout>
      <Navigation />
      <div className='about-container'>
        <h1>About Me</h1>
        <div className='about-main'>
          <div className='about-pic'>
            <img src='/assets/about-pic.JPG' alt='Jeff Oliver and Bandit' />
          </div>
          <div className='skills-list'>
            <h2>Skills</h2>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>JavaScript - ES6</li>
              <li>Node Js</li>
              <li>Express Js</li>
              <li>Knex Js</li>
              <li>PostgreSql</li>
              <li>Sqlite3</li>
              <li>MongoDb</li>
              <li>Python</li>
              <li>Git</li>
              <li>Html 5</li>
              <li>Css 3</li>
              <li>Sass</li>
              <li>Less</li>
            </ul>
          </div>
          <div className='about-text'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              omnis quae quam. Accusamus doloremque quas quaerat temporibus aut,
              error recusandae nihil excepturi. Ratione quam sequi ea rem
              reprehenderit eos veritatis repudiandae, optio minima recusandae
              facere accusantium. Neque reprehenderit pariatur dolorem possimus
              quaerat numquam aspernatur rem dolorum perferendis nesciunt porro
              delectus dignissimos est, consectetur vitae dolor illum voluptates
              ipsum corporis amet molestias? Ratione ad repudiandae
              exercitationem, nam minima, quo fugit optio maiores debitis quod
              adipisci facere. Libero odit nemo debitis, accusamus ipsa quam
              aspernatur necessitatibus dolores quae, perferendis reiciendis
              facilis, nulla nobis adipisci eius cupiditate voluptatum? Voluptas
              voluptates veritatis est iste?
            </p>
          </div>
        </div>
        <SkillsIcons />

        <style jsx>{`
          .about-container {
            height: 80vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 10em;
          }
          .about-main {
            display: flex;
            justify-content: space-around;
            width: 70%;
            align-items: flex-start;
            margin: 8em 4em;
          }
          .about-pic {
            width: 30%;
          }
          .about-pic img {
            width: 100%;
            border-radius: 5px;
          }
          .skills-list {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 30%;
          }
          .skills-list h2 {
            margin: 0;
          }
          .skills-list ul {
            padding: 0;
            list-style: none;
            text-align: center;
            line-height: 1.5em;
          }
          .about-text {
            width: 30%;
          }
          .about-text p {
            margin: 0;
            line-height: 1.5em;
          }
          @media only screen and (max-width: 600px) {
            .about-container {
              margin-top: 0;
            }
            .about-main {
              flex-direction: column;
              align-items: center;
              margin: 4em 1em;
            }
            .about-pic {
              width: 80%;
            }
            .skills-list {
              width: 80%;
              margin: 2em 0;
            }
            .skills-list ul {
              display: flex;

              flex-wrap: wrap;
            }
            .skills-list li {
              margin: 0 1em;
            }
            .about-text {
              width: 80%;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default About;
