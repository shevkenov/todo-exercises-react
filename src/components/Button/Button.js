import React from 'react';

import './LinkButton.css';

const Button = (props) => {

  return <button {...props} className='link btn'>
      {
          props.children
      }
  </button>;
};

export default Button;
