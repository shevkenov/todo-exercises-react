import React from 'react';
import LinkButton from '../Button/LinkButton.js';

import './Nav.css';

const Navbar = () => {
  return (
    <nav>
      <LinkButton path="/">Home</LinkButton>
      <LinkButton path="/create">Create Exercise</LinkButton>
    </nav>
  );
};

export default Navbar;
