import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = () => {
  return (
    <header>
      <Stats />
      <h1 aria-label="the title of the app is">Scoreboard</h1>
      <Stopwatch />
    </header>
  );
};

export default Header;
