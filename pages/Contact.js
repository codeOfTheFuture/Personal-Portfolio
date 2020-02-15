import React from "react";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className='contact'>
        <h1>Contact</h1>

        <style jsx>{`
          .contact {
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

export default Contact;
