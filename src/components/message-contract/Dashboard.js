import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Post from './Post';
import Form from './Form';
import Footer from '../Footer';
import abi from '../../utils/WavePortal.json';

const contractAddress = '0xD905043Bc02a8E37b0DfF2EfA9F4Edb11B8062ca';
const contractABI = abi.abi;

const Dashboard = ({ setMessageToState }) => {
  const [allWaves, setAllWaves] = useState([]);
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

  useEffect(() => {
    getAllWaves();
  }, []);

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
        try {
          const waveTxn = await wavePortalContract.addWave(message);
          setMessageToState({
            color: 'info',
            message: `Mining the Transaction...`,
          });
          console.log('Mining...', waveTxn.hash);

          await waveTxn.wait();

          console.log('Mined -- ', waveTxn.hash);

          count = await wavePortalContract.getTotalWaves();
          console.log('Retrieved total wave count...', count.toNumber());
          getAllWaves();
          setMessageToState({
            color: 'success',
            message: `Transaction mined... ${count.toNumber()} Waves`,
          });
        } catch (err) {
          console.log(err.code);
          if (err.code == 'UNPREDICTABLE_GAS_LIMIT') {
            setMessageToState({
              color: 'error',
              message: `Wait for 15 mins before sending another wave`,
            });
          }
        }
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='dashboard position-relative'>
      <Form onSubmit={wave} />
      <Post listOfMessages={allWaves} />
      <Footer color='black' />
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
