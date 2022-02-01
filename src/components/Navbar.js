import React from 'react';

const Navbar = ({ setMode, mode }) => {
  return (
    <div class='topright col my-5'>
      <div class='d-flex justify-content-center'>
        <div class='Circle-footer mx-3'>
          <a
            href='https://ca.linkedin.com/in/pandya-dhrumil'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fab fa-ethereum'></i>
          </a>
        </div>
        <div class='Circle-footer mx-3'>
          {mode === 'light' ? (
            <i class='fas fa-moon' onClick={setMode}></i>
          ) : (
            <i class='fas fa-sun' onClick={setMode}></i>
          )}
        </div>
        <div class='Circle-footer mx-3'>
          <a
            href='https://github.com/DhrumilP'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fab fa-github'></i>
          </a>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
