import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import './App.css';
import Alert from './components/AlertRender';
import Landing from './components/Landing';
import Post from './components/Post';
import { Switch, Route, Link } from 'react-router-dom';

import abi from './utils/WavePortal.json';
import PublicRoute from './utils/PublicRoute';
import PrivateRoute from './utils/PrivateRoute';
import Dashboard from './components/Dashboard';

const App = () => {
  const [allWaves, setAllWaves] = useState([]);
  const [currentAccount, setCurrentAccount] = useState('');
  const [message, setMessage] = useState('');
  const contractAddress = '0x0e40348aE397B1cA609542c05d5799251b78a050';
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
        // setMessage({
        //   color: 'info',
        //   message: `Found an authorized account: ${account}.....`,
        // // });
        setCurrentAccount(account);
        getAllWaves();
      } else {
        setMessage({ color: 'error', message: 'Please login to MetaMask' });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onCloseAlert = () => {
    setMessage('');
  };

  const getAllWaves = async () => {
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
        const waves = await wavePortalContract.getAllWaves();
        let wavesCleaned = [];

        waves.forEach(wave => {
          wavesCleaned.push({
            address: wave.waver,
            timestamp: new Date(wave.timestamp * 1000),
            message: wave.message,
          });
        });

        setAllWaves(wavesCleaned);
      } else {
        console.log("Ethereum object doesn't exist!");
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
      getAllWaves();
      setMessage('');
    } catch (error) {
      console.log(error);
    }
  };

  const wave = async message => {
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
        const waveTxn = await wavePortalContract.addWave(message);
        setMessage({ color: 'info', message: `Mining the Transaction...` });
        console.log('Mining...', waveTxn.hash);

        await waveTxn.wait();

        console.log('Mined -- ', waveTxn.hash);

        count = await wavePortalContract.getTotalWaves();
        console.log('Retrieved total wave count...', count.toNumber());
        getAllWaves();
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

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className='vh-100 position-relative container-fluid g-0 text-center'>
      {message && (
        <Alert
          color={message.color}
          message={message.message + currentAccount}
          onClose={onCloseAlert}
        />
      )}
      <Switch>
        <PublicRoute
          props={{}}
          auth={currentAccount}
          component={Landing}
          connectWallet={connectWallet}
          currentAccount={currentAccount}
          path='/'
          exact
        />
        <PrivateRoute
          auth={currentAccount}
          component={Dashboard}
          onSubmit={wave}
          listOfMessages={allWaves}
          path='/dashboard'
          exact
        />
      </Switch>
    </div>
  );
};

export default App;
