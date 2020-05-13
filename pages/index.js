import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import SocialMediaLinks from "../components/SocialMediaLinks";

const Home = () => (
  <Layout>
    <div>
      <Head>
        <title>Jeff Oliver - Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Raleway&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <Navigation />
      <div className='home-container'>
        <div className='home-bg'>
          <div className='bg-overlay-top'></div>
          <h1 className='title'>
            <span className='name'>Jeff Oliver</span>
            <span className='hyphen'>-</span>
            <span>Full Stack Web Developer</span>
          </h1>
          <div className='portfolio'>
            <div className='portfolio-pic'></div>
          </div>
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
          height: 100vh;
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
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          margin-top: 1em;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 3rem;
          text-align: center;
          color: #fff;
        }
        .title span {
          margin: 0 1em;
        }
        .portfolio {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }
        .portfolio-pic {
          position: absolute;
          z-index: 1;
          width: 400px;
          height: 400px;
          background-image: url("/assets/portfolio-pic.jpg");
          background-color: black;
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
          width: 100%;
          height: 50px;
          z-index: 10;
        }
        @media only screen and (max-width: 600px) {
          .title {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: absolute;
            margin-top: 1em;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 1.5rem;
            text-align: center;
            color: #fff;
          }
          .title span {
            margin-bottom: 1em;
          }
          .title span.hyphen {
            display: none;
          }
          .portfolio-pic {
            width: 200px;
            height: 200px;
          }
        }
      `}</style>
    </div>
  </Layout>
);

export default Home;
