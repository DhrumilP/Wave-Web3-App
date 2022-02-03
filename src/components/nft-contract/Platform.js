import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import blob from '../../assets/blob3.gif';
import blob2 from '../../assets/blob2.gif';
import { Link } from 'react-router-dom';
const Platform = ({ mode, currentAccount, setMode }) => {
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
          linkToETH={'https://testnets.opensea.io/' + currentAccount}
          callingFrom='Platform'
          setMode={setMode}
          mode={mode}
        />
        <div className='hero platform'>
          <h1 className='h1 m-0'>
            <strong>
              <span className='nft'>NFT</span> <br />
              Collection
            </strong>
          </h1>
          <h5 className='my-4'>
            <strong>
              Each unique. Each beautiful. Discover your NFT today.
            </strong>
          </h5>
          <Link to='/dashboard'>
            <button type='btn' className='btn btn-lg btn-primary'>
              <strong className=''>Mint NFT</strong>
            </button>
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Platform;
