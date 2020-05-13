import React from "react";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <Layout>
      <Navigation />
      <div className='contact'>
        <h1>Contact</h1>
        <h2>Please contact me using the form below!</h2>
        <ContactForm />
        <style jsx>{`
          .contact {
            height: 80vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
          }
          @media only screen and (max-width: 600px) {
            .contact {
              height: 100%;
              justify-content: center;
              text-align: center;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Contact;
