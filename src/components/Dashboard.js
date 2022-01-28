import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import Form from './Form';
import Footer from './Footer';

const WEBSITE_NAME = 'Dhrumil Pandya';
const WEBSITE_LINK = 'https://dhrumilpandya.com/';

const Dashboard = props => {
  return (
    <div className='position-relative'>
      <Form />
      <Post />
      <Footer color='black' />
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
