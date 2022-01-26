import React, { useEffect } from 'react';
import './App.css';

// Constants
const WEBSITE_NAME = 'Dhrumil Pandya';
const WEBSITE_LINK = 'https://dhrumilpandya.com/';

const App = () => {
  const [currentAccount, setCurrentAccount] = React.useState('');
  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert('Please install MetaMask');
      } else {
        console.log('MetaMask is installed');
      }

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log('Found an authorized account:', account);
        setCurrentAccount(account);
      } else {
        console.log('No authorized account found');
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
    } catch (error) {
      console.log(error);
    }
  };

  const wave = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Providers(etherum);
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
    <button className='cta-button wave-button' onClick={connectWallet}>
      👋 Wave!
    </button>
  );

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className='App'>
      <div className='container'>
        <div className='header-container'>
          <p className='header'>🚀 Hey there!</p>
          <p className='sub-text'>
            I am Dhrumil, wave at me and get a chance to earn Etherum 🐼
          </p>
          {!currentAccount && renderNotConnectedContainer()}
          {waveAtMe()}
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
