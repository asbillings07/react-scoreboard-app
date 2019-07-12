import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = () => {
  return (
    <header>
      <Stats />
      <h1>Ready, Set, Score!</h1>
      <h3>Scoreboard</h3>
      <Stopwatch />
    </header>
  );
};

export default Header;
