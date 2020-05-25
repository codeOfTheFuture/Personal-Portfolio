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
          <SkillsIcons />
          <div className='about-text'>
            <p>
              Highly motivated full-stack web developer with a passion for
              building software that improves people's lives. I began my
              programming journey as a self-taught developer 2+ years ago,
              learning the core fundamentals of the web, and am now a recent
              graduate of a 9-month coding boot-camp. I am highly skilled in
              multiple web technologies including React, Redux, and Node JS.
            </p>
          </div>
        </div>

        <style jsx>{`
          .about-container {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .about-container h1 {
            font-family: Montserrat;
            background-color: lightgrey;
            letter-spacing: 2px;
            padding: 0.3em 0.5em;
            border: 1px solid black;
            border-radius: 20px;
            box-shadow: 0 0 0 4px whitesmoke;
            text-shadow: 2px 2px 2px red;
          }
          .about-main {
            display: flex;
            justify-content: center;
            width: 90%;
            margin: 2em 0;
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
          .about-text {
            width: 35%;
          }
          .about-text p {
            height: 62vh;
            margin: 0;
            padding: 0 2em;
            line-height: 1.5em;
            overflow-y: scroll;
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
            .about-text p {
              overflow-y: none;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default About;
