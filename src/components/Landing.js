import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Navbar from './Navbar';

const Landing = ({ currentAccount, connectWallet, mode, setMode }) => {
  const renderNotConnectedContainer = () => (
    <button
      className='btn btn-primary btn-lg btn-gradient'
      onClick={connectWallet}
      type='button'
    >
      <strong>Connect Wallet</strong>
    </button>
  );

  return (
    <div className='landing vh-100 text-white d-flex justify-content-center text-center align-items-center'>
      <Navbar setMode={setMode} mode={mode} />
      <div className='hero'>
        <h1 className='h1 m-0'>
          <strong>🚀 Hey there!</strong>
        </h1>
        <h5 className='my-4'>
          <strong>
            One spot. To earn Etherum by waving me. Plus discover your own NFTs!
          </strong>
        </h5>
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
