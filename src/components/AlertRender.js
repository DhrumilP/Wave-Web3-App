import React from 'react';
import PropTypes from 'prop-types';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const AlertRender = ({ color, message, onClose, property }) => {
  return (
    <Alert
      onClose={() => onClose()}
      className={'w-20 position-absolute ' + property}
      severity={color}
    >
      {message}
    </Alert>
  );
};

AlertRender.propTypes = {
  color: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default AlertRender;
