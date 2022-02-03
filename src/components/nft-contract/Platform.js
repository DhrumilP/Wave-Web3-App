import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import blob from '../../assets/blob3.gif';
import blob2 from '../../assets/blob2.gif';
import { Link } from 'react-router-dom';
import { ethers } from 'ethers';
import MintNFT from '../../utils/MintNFT.json';

const Platform = ({ mode, currentAccount, setMode, setMessageToState }) => {
  const askContractToMintNft = async () => {
    const CONTRACT_ADDRESS = '0x5890Ee542DcbB8734264A5A5D0946B1A419A3b5d';

    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(
          CONTRACT_ADDRESS,
          MintNFT.abi,
          signer
        );

        console.log('Going to pop wallet now to pay gas...');
        let nftTxn = await connectedContract.makeMintNFT();

        setMessageToState({
          color: 'info',
          message: `Mining the Transaction...`,
        });

        console.log('Mining...please wait.');

        await nftTxn.wait();
        setMessageToState({
          color: 'success',
          message: `Whoa! Check your NFT by clicking ETH button on right`,
        });
        console.log(
          `Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
        );
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };
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
          <button
            type='btn'
            onClick={askContractToMintNft}
            className='btn btn-lg btn-primary'
          >
            <strong className=''>Mint NFT</strong>
          </button>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Platform;
