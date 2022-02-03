import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Alert from './components/AlertRender';
import Landing from './components/Landing';
import useLocalStorage from 'use-local-storage';

import { Switch } from 'react-router-dom';

import PublicRoute from './utils/PublicRoute';
import PrivateRoute from './utils/PrivateRoute';
import Dashboard from './components/message-contract/Dashboard';
import Platform from './components/nft-contract/Platform';
import ServicePage from './components/ServicePage';

const App = () => {
  const [currentAccount, setCurrentAccount] = useState('');
  const [fullCurrentAccount, setFullCurrentAccount] = useState('');
  const [message, setMessage] = useState('');
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

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
        setFullCurrentAccount(accounts[0]);
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

  const onCloseAlert = () => {
    setMessage('');
  };

  const setMessageToState = message => {
    setMessage(message);
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
      setFullCurrentAccount(accounts[0]);
      setMessage('');
    } catch (error) {
      console.log(error);
    }
  };

  const onSetModeClick = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
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
    <div
      data-theme={theme}
      className='vh-100 text-center position-relative container-fluid g-0'
    >
      {message && (
        <Alert
          property={'mt-5 top-0 start-50 translate-middle'}
          color={message.color}
          message={message.message}
          onClose={onCloseAlert}
        />
      )}
      <Switch>
        <PublicRoute
          auth={currentAccount}
          component={Landing}
          data={{
            setMode: onSetModeClick,
            mode: theme,
            connectWallet: connectWallet,
            currentAccount: currentAccount,
          }}
          path='/'
          exact
        />
        <PrivateRoute
          auth={currentAccount}
          component={Dashboard}
          data={{
            setMessageToState: setMessageToState,
            setMode: onSetModeClick,
            mode: theme,
            currentAccount: fullCurrentAccount,
          }}
          path='/dashboard'
          exact
        />
        <PrivateRoute
          auth={currentAccount}
          component={Platform}
          data={{
            currentAccount: fullCurrentAccount,
            setMode: onSetModeClick,
            setMessageToState: setMessageToState,
            mode: theme,
          }}
          path='/platform'
          exact
        />

        <PrivateRoute
          auth={currentAccount}
          component={ServicePage}
          data={{
            setMode: onSetModeClick,
            mode: theme,
            currentAccount: fullCurrentAccount,
            checkIfWalletIsConnected: checkIfWalletIsConnected,
          }}
          path='/service'
          exact
        />
      </Switch>
    </div>
  );
};

export default App;
