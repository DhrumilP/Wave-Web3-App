import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    alert('A name was submitted: ' + message);
    onSubmit(message);
    setMessage('');
    e.preventDefault();
  };

  const handleChange = e => {
    setMessage(e.target.value);
  };

  return (
    <div className='container mt-5'>
      <div className='jumbotron bg-light text-dark '>
        <h1 className='display-4'>Hello, there!</h1>
        <p className='lead'>
          Dhrumil here! 👨‍💻 Shoot me a message and earn a chance to earn Etherum!
          🤑
        </p>
        <hr className='my-4' />
        <form
          onSubmit={handleSubmit}
          className='d-flex mx-5 pb-4 justify-content-center'
        >
          <div className='form-group w-50'>
            <input
              type='text'
              className='form-control'
              onChange={handleChange}
              value={message}
              id='textInput'
              aria-describedby='messageHelp'
              placeholder='Enter your message!'
            />
            <small className='form-text text-muted'>
              A fun message to be on the Rinkeby network. You can use emoji! 😉
            </small>
          </div>
          <div className='mx-3'>
            <button type='submit' className='btn btn-primary'>
              👋 Wave!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Form.propTypes = {};

export default Form;
