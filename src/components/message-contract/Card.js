import React from 'react';
import PropTypes from 'prop-types';
const emoji = require('random-happy-emoji');

const Card = ({ address, time, mode, message }) => {
  return (
    <div className={'card bg-transparent shadow'}>
      <div
        className={
          'card-header h4  '
          // (mode === 'light' ? 'border-secondary' : 'border-secondary')
        }
      >
        {emoji()}
      </div>
      <div className='card-body'>
        <h6 className='card-title'>{time}</h6>
        <p className='card-text'>{message}</p>
        <a
          href={`https://rinkeby.etherscan.io/address/${address}`}
          className={
            'btn btn-sm btn-outline-' + (mode === 'dark' ? 'light' : 'dark')
          }
        >
          {address.substring(0, 10)}...
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {};

export default Card;
