import React from "react";
import Layout from "../components/Layout";
import SkillsIcons from "../components/SkillsIcons";

const About = () => {
  return (
    <Layout>
      <div className='about-container'>
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
              <li>Python</li>
              <li>Html 5</li>
              <li>Css 3</li>
              <li>Sass</li>
              <li>Less</li>
            </ul>
          </div>
          <div className='about-text'>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              vel in ut delectus? Sint, quibusdam! Quibusdam, harum veritatis.
              Temporibus reiciendis ipsa, adipisci, eligendi vero explicabo quae
              deleniti quos nam corporis dignissimos quis possimus
              necessitatibus perspiciatis id veritatis voluptatem quod fuga
              magnam incidunt. Delectus dignissimos iusto adipisci est at harum
              nam?
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
            justify-content: center;
            align-items: center;
          }
          .about-main {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default About;
