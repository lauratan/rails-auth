import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        'background-color': '#343a40',
        color: 'white',
        'text-align': 'center',
        padding: '10px'
      }}
    >
      <span className='text-center'>2020</span>
    </footer>
  );
};

export default Footer;
