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
        <div className='form-control'>
          <label htmlFor='name' className='label'>
            Name
          </label>
          <input type='text' placeholder='Name' name='name' className='input' />
        </div>
        <div className='form-control'>
          <label htmlFor='email' className='label'>
            Email
          </label>
          <input
            type='email'
            placeholder='Email'
            name='email'
            className='input'
          />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='message' className='label'>
          Message
        </label>
        <textarea
          name='message'
          id='message'
          cols='10'
          rows='7'
          className='message'
          placeholder='Message'
        ></textarea>
      </div>
      <button className='btn'>Send Message</button>
      <style jsx>{`
        .form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 60%;
        }
        .form-group {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 2em;
          width: 100%;
        }
        .form-control {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        .label {
          width: 100%;
          text-align: left;
          margin: 0 0 0.5em 0.5em;
        }
        .input {
          width: 20.5rem;
          // margin: 0 4em;
          padding: 1.5em;
          border-radius: 5px;
        }
        .input:focus {
          border: 2px solid red;
          border-radius: 5px;
        }
        .input::-webkit-input-placeholder {
          font-family: Raleway, Helvetica, sans-serif;
        }
        .message {
          box-sizing: border-box;
          padding 1.5em;
          border-radius: 5px;
          width: 100%;
        }
        .message:focus {
          border: 2px solid red;
          border-radius: 5px;
        }
        .btn {
          margin-top: 1.2em;
          padding: 1em 1.5em;
          background-color: white;
          border-radius: 5px;
          font-size: 0.8em;
          cursor: pointer;
        }
        .btn:hover {
          background-color: black;
          color: white;
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
          .input {
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
