import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = () => {
  return (
    <Header>
      <Stats />
      <h1>
        <em>Ready, Set, Score!</em>
      </h1>
      <Stopwatch />
    </Header>
  );
};

export default Header;
