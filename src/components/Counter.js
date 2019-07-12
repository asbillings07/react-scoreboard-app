import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';

// desturcturing props
const Counter = ({ index }) => {
  return (
    <Consumer>
      {/* desturcturing context */}
      {({ actions, players }) => (
        <div className="counter">
          <button
            className="counter-action decrement"
            onClick={() => actions.changeScore(index, -1)}
          >
            -
          </button>
          <span className="counter-score">{players[index].score}</span>
          <button
            className="counter-action increment"
            onClick={() => actions.changeScore(index, 1)}
          >
            +
          </button>
        </div>
      )}
    </Consumer>
  );
}; // sending data up to parent through click event

Counter.propTypes = {
  index: PropTypes.number,
}; // type checking
export default Counter;
