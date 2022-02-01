import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Platform = ({ mode, setMode }) => {
  return (
    <div className='landing vh-100 text-white d-flex justify-content-center text-center align-items-center'>
      <Navbar callingFrom='Platform' setMode={setMode} mode={mode} />
      <div className='hero'>
        <h1 className='h1 m-0'>
          <strong>NFT Collection</strong>
        </h1>
        <h5 className='my-4'>
          <strong>Each unique. Each beautiful. Discover your NFT today.</strong>
        </h5>
      </div>

      <Footer />
    </div>
  );
};

export default Platform;
