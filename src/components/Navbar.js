import React from 'react';

const Navbar = ({ setMode, mode, currentAccount }) => {
  return (
    <div className='topright col my-5'>
      <div className='d-flex justify-content-center align-items-center'>
        {currentAccount && (
          <div className='mx-4'>
            <a
              href='https://ca.linkedin.com/in/pandya-dhrumil'
              target='_blank'
              rel='noopener noreferrer'
            >
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
            href='https://github.com/DhrumilP'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-github'></i>
          </a>
        </div>
        {/* <div className='mx-3'>
          <button
            type='button'
            className='btn btn-lg btn-outline-light connect-wallet'
          >
            Connect Wallet
          </button>
        </div> */}
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
