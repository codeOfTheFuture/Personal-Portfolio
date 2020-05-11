import React, { useState } from "react";

const ContactForm = () => {
  const formSubmit = (event) => {
    const form = event.target;
    const data = new FormData(form);

    const requestOptions = {
      method: form.method,
      headers: { Accept: "application/json" },
      body: JSON.stringify(data),
    };

    fetch(form.action, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <form
      className='form'
      method='POST'
      action='https://formspree.io/xyynyqzr'
      target='_blank'
      onSubmit={() => formSubmit()}
    >
      <div className='form-group'>
        <input
          type='text'
          placeholder='Name'
          name='name'
          className='form-control'
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          className='form-control'
        />
      </div>
      <textarea
        name='message'
        id='message'
        cols='194'
        rows='20'
        className='message'
        placeholder='Message'
      ></textarea>
      <button className='btn'>Send Message</button>
      <style jsx>{`
        .form {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .form-group {
          display: flex;
          margin-bottom: 4em;
        }
        .form-control {
          width: 39.5rem;
          margin: 0 4em;
          padding: 2em;
          border-radius: 5px;
        }
        .message {
          padding 2em;
          border-radius: 5px;
        }
        .btn {
          margin-top: 4em;
          padding: 2em 4em;
          background-color: white;
          border-radius: 5px;
        }
        @media only screen and (max-width: 600px) {
          .form {
            justify-content: center;
          }
          .form-group {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 2em;
          }
          .form-control {
            width: 18.5rem;
            margin: 2em 0;
          }
          .message {
            width: 80%;
            margin: 0;
          }
        }
      `}</style>
    </form>
  );
};

export default ContactForm;
