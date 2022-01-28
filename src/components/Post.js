import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const dummy = [
  {
    address: '0x086DB54335f6aA4201e3458780B9e2182A3B834f',
    timestamp: 'Thu Jan 27 2022 16:17:01',
    message: 'Hello World!',
  },
  {
    address: '0x086DB54335f6aA4201e3458780B9e2182A3B834f',
    timestamp: 'Thu Jan 27 2022 16:17:01',
    message: 'Hello World!',
  },
  {
    address: '0x086DB54335f6aA4201e3458780B9e2182A3B834f',
    timestamp: 'Thu Jan 27 2022 16:17:01',
    message: 'Hello World!',
  },
  {
    address: '0x086DB54335f6aA4201e3458780B9e2182A3B834f',
    timestamp: 'Thu Jan 27 2022 16:17:01',
    message: 'Hello World!',
  },
  {
    address: '0x086DB54335f6aA4201e3458780B9e2182A3B834f',
    timestamp: 'Thu Jan 27 2022 16:17:01',
    message: 'Hello World!',
  },
  {
    address: '0x086DB54335f6aA4201e3458780B9e2182A3B834f',
    timestamp: 'Thu Jan 27 2022 16:17:01',
    message: 'Hello World!',
  },
];

const Post = props => {
  return (
    <div className='container'>
      <div className='row'>
        {dummy.map((wave, index) => {
          return (
            <div
              key={index}
              className='col-md-4 my-4 d-flex justify-content-center'
            >
              <Card
                message={wave.message}
                address={wave.address}
                time={wave.timestamp.toString()}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

Post.propTypes = {};

export default Post;
