import React from 'react';

import './Header.css'

const Header = (prop) => {
  return (
    <header>
      <button className={prop.type === 'all' ? 'active' : ''} onClick={() => prop.filter('all')}>view all</button>
      <button className={prop.type === 'completed' ? 'active' : ''} onClick={() => prop.filter('completed')}>completed</button>
      <button className={prop.type === 'pending' ? 'active' : ''} onClick={() => prop.filter('pending')}>pending</button>
    </header>
  );
};

export default Header;
