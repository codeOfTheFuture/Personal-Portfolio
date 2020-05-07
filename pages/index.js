import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import SocialMediaLinks from "../components/SocialMediaLinks";

const Home = () => (
  <Layout>
    <div>
      <Head>
        <title>Jeff Oliver - Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='home-container'>
        <div className='home-bg'>
          <div className='bg-overlay-top'></div>
          <h1 className='title'>
            Hi, I'm Jeff!
            <br /> I am a Full Stack Web Developer
          </h1>
          <div className='portfolio-pic'></div>
          <div className='bg-overlay-bottom'></div>
          <div className='social-links'>
            <SocialMediaLinks />
          </div>
        </div>
        <div className='bg-overlay'></div>
      </div>

      <style jsx>{`
        .home-container {
          height: 91.5vh;
          width: 100%;
        }
        .home-bg {
          height: 100%;
          width: 100%;
          background-image: url("/assets/home-bg.jpg");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
        }
        .bg-overlay-top,
        .bg-overlay-bottom {
          height: 50%;
          width: 100%;
          position: absolute;
          background-color: rgba(0, 0, 0, 0.9);
        }
        .bg-overlay-top {
          border-bottom: 2.5px solid #fff;
        }
        .bg-overlay-bottom {
          top: 50%;
          border-top: 2.5px solid #fff;
        }
        .title {
          position: absolute;
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 24px;
          text-align: center;
          color: #fff;
        }
        .portfolio-pic {
          position: absolute;
          z-index: 1;
          top: 28vh;
          left: 42vw;
          width: 200px;
          height: 200px;
          background-image: url("/assets/portfolio-pic.jpg");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          border: 5px solid #fff;
          border-radius: 50%;
        }
        .social-links {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 75vh;
          right: 2vw;
          width: 100%;
          height: 50px;
          z-index: 10;
        }
      `}</style>
    </div>
  </Layout>
);

export default Home;
