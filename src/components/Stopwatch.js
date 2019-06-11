import React, { Component } from "react";

class Stopwatch extends Component {
  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0
  };
  /** 
component lifecycle method - 
every component instance follows a life cycle:

It is mounted onto the DOM, it's updated with changes in data, and its unmounted from the DOM.

Built-in Methods that get called at each point in the life cycle.
Hooks that run code at key times in a component's life cycle.
Give you the ability to control what happens when a component mounts, updates, and unmounts. 
**/
  componentDidMount() {
    this.intervalId = setInterval(() => this.tick(), 100);
  }

  // also use the unmounting function with the mounting function.
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState(prevState => ({
        previousTime: now,
        elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
      }));
    }
  };

  handleStopwatch = () => {
    this.setState(prevState => ({
      isRunning: !prevState.isRunning
    }));
    if (!this.state.isRunning) {
      this.setState({
        previousTime: Date.now()
      });
    }
  };

  handleReset = () => {
    this.setState({
      elapsedTime: 0
    });
  };
  render() {
    const seconds = Math.floor(this.state.elapsedTime / 1000);
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{seconds}</span>
        <button onClick={this.handleStopwatch}>
          {this.state.isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
