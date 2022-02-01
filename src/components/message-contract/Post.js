import React from 'react';
import Card from './Card';

const Post = ({ listOfMessages }) => {
  return (
    <div className='container'>
      <div className='row'>
        {listOfMessages.map((wave, index) => {
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
      <div className='row'>
        <div className='col-md-4 my-4 d-flex justify-content-center'></div>
      </div>
    </div>
  );
};

Post.propTypes = {};

export default Post;
