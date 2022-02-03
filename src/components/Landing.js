import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Navbar from './Navbar';
import blob from '../assets/blob2.gif';
import blob2 from '../assets/green.gif';
import blob3 from '../assets/g2.gif';

const Landing = ({ currentAccount, connectWallet, mode, setMode }) => {
  console.log(mode);
  const renderNotConnectedContainer = () => (
    <button
      type='button'
      className={
        mode === 'light'
          ? 'btn btn-lg  btn-primary'
          : 'btn btn-lg  btn-outline-light connect-wallet'
      }
      onClick={connectWallet}
    >
      <strong>Connect Wallet</strong>
    </button>
  );

  return (
    <>
      <div className='blob-position-1 justify-content-left'>
        <img className='w-100 image-blob-1' src={blob} alt='' />
      </div>
      <div className='blob-position-2 justify-content-left'>
        <img className='w-100 image-blob-2' src={blob2} alt='' />
      </div>
      <div className='blob-position-3 justify-content-left'>
        <img className='w-100 image-blob-2' src={blob3} alt='' />
      </div>
      <div className='landing vh-100 text-white d-flex justify-content-center text-center align-items-center'>
        <Navbar pageCalled='landing' setMode={setMode} mode={mode} />
        <div className='hero landing-text'>
          <h1 className='h1 m-0'>
            <strong>Hey There!</strong>
          </h1>
          <h5 className='my-4'>
            <strong>One spot. Earn NFTs and Ethereum</strong>
          </h5>
          {!currentAccount && renderNotConnectedContainer()}
        </div>

        <Footer />
      </div>
    </>
  );
};

Landing.propTypes = {
  currentAccount: PropTypes.string,
  connectWallet: PropTypes.func.isRequired,
};

export default Landing;
