import React, { PureComponent } from "react";
import { Consumer } from "./Context";
import PropTypes from "prop-types";
import Counter from "./Counter";
import Icon from "./Icon";

/**
 * PureComponent implements a life cycle componenet behind the scenes. Refreshes only necessary parts of component with shallow reference.
 *
 *
 */

class Player extends PureComponent {
  render() {
    // desturcturing
    const { index } = this.props;

    return (
      <Consumer>
        {({ actions, players }) => (
          <div className="player">
            <span className="player-name">
              <button
                className="remove-player"
                onClick={() => actions.removePlayer(players[index].id)}
              >
                ✖
              </button>
              <Icon isHighScore={this.props.isHighScore} />
              {players[index].name}
            </span>

            <Counter index={index} />
          </div>
        )}
      </Consumer>
    );
  }
}

Player.propTypes = {
  index: PropTypes.number.isRequired,
  isHighScore: PropTypes.bool
}; // a way of creating a type check on props

export default Player;
