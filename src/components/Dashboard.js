import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import Form from './Form';
import Footer from './Footer';

const Dashboard = ({ onSubmit, listOfMessages }) => {
  return (
    <div className='position-relative'>
      <Form onSubmit={onSubmit} />
      <Post listOfMessages={listOfMessages} />
      <Footer color='black' />
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
