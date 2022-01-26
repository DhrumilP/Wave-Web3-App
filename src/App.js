import { ethers } from 'ethers';
import React, { useEffect } from 'react';
import './App.css';
import abi from './utils/WavePortal.json';
import MuiAlert from '@material-ui/lab/Alert';

// Constants
const WEBSITE_NAME = 'Dhrumil Pandya';
const WEBSITE_LINK = 'https://dhrumilpandya.com/';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const App = () => {
  const [currentAccount, setCurrentAccount] = React.useState('');
  const [message, setMessage] = React.useState('');
  const contractAddress = '0x4Ec2dc9a1b856B3Ab99A2E6783842e3c7D8013Ea';
  const contractABI = abi.abi;
  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        setMessage({ color: 'error', message: 'Please install MetaMask' });
      } else {
        console.log('MetaMask is installed');
      }

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length !== 0) {
        const account = accounts[0].toString().substring(0, 6);
        setMessage({
          color: 'info',
          message: `Found an authorized account: ${account}.....`,
        });
        setCurrentAccount(account);
      } else {
        setMessage({ color: 'error', message: 'Please login to MetaMask' });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert('Get MetaMask!');
        return;
      }

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      console.log('Connected', accounts[0]);
      setCurrentAccount(accounts[0]);
      setMessage('');
    } catch (error) {
      console.log(error);
    }
  };

  const wave = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        let count = await wavePortalContract.getTotalWaves();
        console.log('Retrieved total wave count...', count.toNumber());

        /*
         * Execute the actual wave from your smart contract
         */
        const waveTxn = await wavePortalContract.addWave();
        setMessage({ color: 'info', message: `Mining the Transaction...` });
        console.log('Mining...', waveTxn.hash);

        await waveTxn.wait();

        console.log('Mined -- ', waveTxn.hash);

        count = await wavePortalContract.getTotalWaves();
        console.log('Retrieved total wave count...', count.toNumber());
        setMessage({
          color: 'success',
          message: `Transaction mined... ${count.toNumber()} waves on chain`,
        });
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  /*
   * We want to render this UI when the user hasn't connected
   * their wallet to our app yet.
   */
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

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className='App'>
      <div className='container'>
        {message && (
          <Alert
            onClose={() => {
              setMessage('');
            }}
            className='alert'
            severity={message.color}
          >
            {message.message}
          </Alert>
        )}

        <div className='header-container'>
          <p className='header'>🚀 Hey there!</p>
          <p className='sub-text'>
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
    </div>
  );
};

export default App;
