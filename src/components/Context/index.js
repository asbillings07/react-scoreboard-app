import React, { Component } from 'react';

// Step 1: creating context and assigning to a variable
// steps up provider and consumer.
const ScoreboardContext = React.createContext();
// pulling out Provider and Consumer from the context and exporting them to use in other places.
/*******
 Higher Order Component - A techinque in React for resuing component logic. A HOC takes an exisiting component and returns a new component. Acts as a wrapper that takes an existing componet and returns a new component. 

 Whereas a component transforms props into UI, a higher-order component transforms a component into another component.
 ************/
export class Provider extends Component {
  state = {
    players: [
      {
        name: 'Aaron',
        score: 0,
        id: 1,
      },
      {
        name: 'Amanda',
        score: 0,
        id: 2,
      },
      {
        name: 'Esther',
        score: 0,
        id: 3,
      },
      {
        name: 'Eden',
        score: 0,
        id: 4,
      },
    ],
  };
  //Player id counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    if (this.state.players[index].score >= 0) {
      this.setState(prevState => ({
        score: (prevState.players[index].score += delta),
      }));
    } else {
      this.setState({ score: 0 });
    }
  };

  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id),
      };
    });
  };

  handleAddPlayer = name => {
    this.setState(prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: (this.prevPlayerId += 1),
          },
        ],
      };
    });
  };

  getHighScore = () => {
    const scores = this.state.players.map(p => p.score);
    const highScore = Math.max(...scores);

    if (highScore) {
      return highScore;
    } else {
      return null;
    }
  };

  render() {
    return (
      <ScoreboardContext.Provider
        value={{
          players: this.state.players,
          actions: {
            changeScore: this.handleScoreChange,
            removePlayer: this.handleRemovePlayer,
            addPlayer: this.handleAddPlayer,
            highScore: this.getHighScore(),
          },
        }}
      >
        {this.props.children}
      </ScoreboardContext.Provider>
    );
  }
}

export const Consumer = ScoreboardContext.Consumer;

/* this.props.children - A special React prop that lets you pass components as data to other componenets.This allows the App component along with all it's children to be passed into the Provider and rendered. */

/**
 * 
 * 
 * Context API:

Consists of 3 parts:

1. createContext() method
    1. Sets up a context and returns an object with a Provider and a Consumer
2. Provider
    1. Used as high as possible in the tree. It allows a Consumer to subscribe to context changes
    2. The provider component requires a Value Prop, actions or event handlers. 
    3. Any desendant of the provider componenet will have access to the data given to the value Prop.

3. Consumer 
    1. Access the Provider to get any data needed. The Consumer helps avoid prop drilling.
    2. Render Prop - A technique for sharing code between React components using a prop whose value is a function. 

Communication between the Provider and Consumer makes context work.

 * 
 * 
 */
