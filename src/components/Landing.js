import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';

const Landing = ({ currentAccount, connectWallet }) => {
  const renderNotConnectedContainer = () => (
    <button
      className='cta-button connect-wallet-button'
      onClick={connectWallet}
    >
      Connect to Wallet
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
      </div>

      <Footer />
    </div>
  );
};

Landing.propTypes = {
  currentAccount: PropTypes.string,
  connectWallet: PropTypes.func.isRequired,
};

export default Landing;
