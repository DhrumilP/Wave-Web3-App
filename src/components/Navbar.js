import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ setMode, mode, pageCalled, linkToETH }) => {
  return (
    <div className='topright col my-5'>
      <div className='d-flex justify-content-center align-items-center'>
        {pageCalled !== 'landing' && (
          <div className='mx-4'>
            <a href={linkToETH} target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-ethereum'></i>
            </a>
          </div>
        )}
        <div className=' mx-4'>
          {mode === 'light' ? (
            <i className='fas fa-moon' onClick={setMode}></i>
          ) : (
            <i className='fas fa-sun' onClick={setMode}></i>
          )}
        </div>
        <div className='mx-4'>
          <a
            href='https://github.com/DhrumilP/Wave-Web3-App'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-github'></i>
          </a>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  pageCalled: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  pageCalled: 'notLanding',
};

export default Navbar;
