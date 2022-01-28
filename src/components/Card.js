import React from 'react';
import PropTypes from 'prop-types';
const emoji = require('random-happy-emoji');

const Card = ({ address, time, message }) => {
  return (
    <div className='card'>
      <div className='card-header h4'>{emoji()}</div>
      <div className='card-body'>
        <h6 className='card-title'>{time}</h6>
        <p className='card-text'>{message}</p>
        <a
          href={`https://rinkeby.etherscan.io/address/${address}`}
          className='btn btn-light'
        >
          {address.substring(0, 10)}...
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {};

export default Card;
