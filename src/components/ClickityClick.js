// Code ClickityClick Component Here
import React, { Component } from 'react'

export default class ClickityClick extends Component {
  state = {
    hasBeenClicked: false
  }

  // ADD A CALLBACK to execute once state has been modified!
  handleClick = () => {
    let newState = !this.state.hasBeenClicked
    this.setState({hasBeenClicked: newState}, () => console.log(this.state.hasBeenClicked)) // will log correct state value

    //console.log(this.state.hasBeenClicked) // false because async
  }

  // Another alternative
  handleClick = () => this.setState(previousState => {
    return { // return new state
      hasBeenClicked: !previousState.hasBeenClicked
    }
  })

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }
}

// setting state that is mult-layers deep

// example

// state = {
//   theme: 'blue',
//   addressInfo: {
//     street: null,
//     number: null,
//     city: null,
//     country: null
//   },
// }

// wrong way to set state

// this.setState({
//   addressInfo: {
//     city: 'New York City'
//   }
// });

// right way to set state

// this.setState({
//   addressInfo: {
//     ...this.state.addressInfo,
//     city: 'New York City'
//   }
// });

// a component can change its own state (internally) but not its own props since props (externally) are passed down by parent/grandparents


// setting state for multiple changes - React provides a solution

// pass a callback that take in 'previousState' as an argument and RETURN a new state as { some_state_key: previousState.some_state_key + 1 }

