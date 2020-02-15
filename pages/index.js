import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";

const Home = () => (
  <Layout>
    <div>
      <Head>
        <title>Jeff Oliver - Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='hero'>
        <h1 className='title'>
          Hi, I'm Jeff!
          <br /> I am a Full Stack Web Developer
        </h1>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
          text-align: center;
        }
      `}</style>
    </div>
  </Layout>
);

export default Home;
