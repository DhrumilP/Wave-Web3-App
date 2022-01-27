import React from 'react';
import PropTypes from 'prop-types';
const emoji = require('random-happy-emoji');

const Card = ({ address, time, message }) => {
  return (
    // <div classNameName='card w-50'>
    //   <div classNameName='card-body'>
    //     <h5 classNameName='card-title'>{emoji()}</h5>
    //     <h6 classNameName='card-subtitle mb-2 text-muted'>{time}</h6>
    //     <p classNameName='card-text'>{message}</p>
    //     <a
    //       href={`https://rinkeby.etherscan.io/address/${address}`}
    //       classNameName='card-link'
    //     >
    //       {address.substring(0, 6)}...
    //     </a>
    //   </div>
    // </div>

    <div className='card w-50'>
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
