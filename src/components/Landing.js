import React from 'react';
import PropTypes from 'prop-types';

// Constants
const WEBSITE_NAME = 'Dhrumil Pandya';
const WEBSITE_LINK = 'https://dhrumilpandya.com/';

const Landing = ({ currentAccount, connectWallet, wave }) => {
  const renderNotConnectedContainer = () => (
    <button
      className='cta-button connect-wallet-button'
      onClick={connectWallet}
    >
      Connect to Wallet
    </button>
  );

  const waveAtMe = () => (
    <button className='cta-button wave-button' onClick={wave}>
      👋 Wave!
    </button>
  );

  return (
    <div className='landing vh-100 text-white d-flex justify-content-center align-items-center'>
      <div>
        <span role='img' aria-label='rocket' className='header'>
          🚀 Hey there!
        </span>
        <p className='sub-text mb-5 mt-2'>
          I am Dhrumil, wave at me and get a chance to earn Etherum 🐼
        </p>
        {!currentAccount && renderNotConnectedContainer()}
        {currentAccount && waveAtMe()}
      </div>

      <div className='footer-container'>
        <a
          className='footer-text'
          href={WEBSITE_LINK}
          target='_blank'
          rel='noreferrer'
        >
          {`built by @${WEBSITE_NAME} with `}
          <span className='emoji'></span>
        </a>
      </div>
    </div>
  );
};

Landing.propTypes = {
  currentAccount: PropTypes.string.isRequired,
  connectWallet: PropTypes.func.isRequired,
  wave: PropTypes.func.isRequired,
};

export default Landing;
