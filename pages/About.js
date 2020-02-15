import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <div className='about'>
        <h1>About</h1>

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
