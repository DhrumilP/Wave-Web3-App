import React, { useEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import blob from '../assets/blob2.gif';
import blob2 from '../assets/green.gif';
import { Link } from 'react-router-dom';
const ServicePage = ({ mode, setMode, currentAccount }) => {
  // useEffect(() => {
  //   checkIfWalletIsConnected();
  // }, []);
  return (
    <>
      <div className='blob-position-1 justify-content-left'>
        <img className='w-100 image-blob-1' src={blob} alt='' />
      </div>
      <div className='blob-position-2 justify-content-left'>
        <img className='w-100 image-blob-2' src={blob2} alt='' />
      </div>
      <div className='landing vh-100 text-white d-flex  justify-content-center align-items-center'>
        <Navbar
          linkToETH={'https://rinkeby.etherscan.io/address/' + currentAccount}
          callingFrom='Platform'
          setMode={setMode}
          mode={mode}
        />
        <div className='hero platform d-flex align-items-center'>
          <h1 className='h1 p-5'>
            <strong>
              <span className='nft'>Take</span> <br />
              Your Pick
            </strong>
          </h1>
          <div className='d-flex flex-column p-5 text-center justify-content-center'>
            <h4 className='my-4'>
              <strong>Mint your own unique NFT</strong>
            </h4>
            <Link to='/platform'>
              <button type='btn' className='btn btn-lg btn-success'>
                <strong className=''>Make NFTs</strong>
              </button>
            </Link>
            <hr className='my-5' />
            <h4 className='mb-4'>
              <strong>Send message, earn ETH</strong>
            </h4>
            <Link to='/dashboard'>
              <button type='btn' className='btn btn-lg btn-primary'>
                <strong className=''>Send Wave</strong>
              </button>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ServicePage;
