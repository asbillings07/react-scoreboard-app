import React from "react";
import { Consumer } from "./Context";

// functional component

const AddPlayerForm = () => {
  let playerInput = React.createRef();

  return (
    <Consumer>
      {({ actions }) => {
        let handleSubmit = e => {
          e.preventDefault();
          actions.addPlayer(playerInput.current.value);
          e.currentTarget.reset();
        };
        return (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              ref={playerInput}
              placeholder="Enter a Player's Name"
            />
            <input type="submit" value="Add Player" />
          </form>
        );
      }}
    </Consumer>
  );
};

export default AddPlayerForm;

// Controlled component
// class AddPlayerForm extends Component {
//   playerInput = React.createRef(); // grabs a reference to the field

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.addPlayer(this.playerInput.current.value); // updates the field name
//     e.currentTarget.reset(); // resets the field
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           ref={this.playerInput}
//           placeholder="Enter a Player's Name"
//         />
//         <input type="submit" value="Add Player" />
//       </form>
//     );
//   }
// }
/**
 * Creating a controlled Component
 *
 * Initialize state for the Value of the input
 *
 * Listen for changes on the input to detect when value is update
 *
 * Create an event handler that updates the value state
 * this.setState({ value: "" });
 * handleValueChange = e => {
    this.setState({ value: e.target.value });
  };
 * 
 *  state = {
    value: ""
  };
 *this.state.value
 value={this.state.value}
          onChange={this.handleValueChange} // is triggered immeadtely after each change
 */
