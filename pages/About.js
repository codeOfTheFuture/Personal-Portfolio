import React from "react";
import Layout from "../components/Layout";
import SkillsIcons from "../components/SkillsIcons";

const About = () => {
  return (
    <Layout>
      <div className='about'>
        <SkillsIcons />

        <style jsx>{`
          .about {
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

export default About;
