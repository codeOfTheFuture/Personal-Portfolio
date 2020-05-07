import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <form className='form'>
      <div className='form-group'>
        <input type='text' placeholder='Name' className='form-control' />
        <input type='email' placeholder='Email' className='form-control' />
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
      `}</style>
    </form>
  );
};

export default ContactForm;
