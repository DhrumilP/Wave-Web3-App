import React from 'react';
const WEBSITE_NAME = 'Dhrumil Pandya';
const WEBSITE_LINK = 'https://dhrumilpandya.com/';
const Footer = ({ color, property }) => {
  return (
    <div className={'mb-4 ' + property}>
      <a
        className={`footer-text text-${color}`}
        href={WEBSITE_LINK}
        target='_blank'
        rel='noreferrer'
      >
        {`built by @${WEBSITE_NAME} with `}
        <span className='emoji'></span>
      </a>
    </div>
  );
};
Footer.defaultProps = {
  color: 'white',
  property: 'footer-container mt-5',
};

export default Footer;
