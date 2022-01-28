import React from 'react';
import PropTypes from 'prop-types';

const Form = props => {
  return (
    <div className='container mt-5'>
      <div class='jumbotron bg-light text-dark '>
        <h1 class='display-4'>Hello, there!</h1>
        <p class='lead'>
          Dhrumil here! 👨‍💻 Shoot me a message and earn a chance to earn Etherum!
          🤑
        </p>
        <hr class='my-4' />
        <form className='d-flex mx-5 pb-4 justify-content-center'>
          <div className='form-group w-50'>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Enter your message!'
            />
            <small id='emailHelp' className='form-text text-muted'>
              A fun message to be on the Rinkeby network. You can use emoji! 😉
            </small>
          </div>
          <div className='mx-3'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Form.propTypes = {};

export default Form;
