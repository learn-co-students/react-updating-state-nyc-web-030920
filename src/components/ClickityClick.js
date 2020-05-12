

import React, { Component } from 'react'

class ClickityClick extends Component {
  
  constructor(props) {
    super(props)
  
    //define initial state
    this.state = {
      toggled: false
    }
  }

  // hardCodedHandleClick = () => {
  //   this.setState(
  //     {toggled: true}
  //     )
  // }

handleClick = () => {
  this.setState( previousSate => {
    return {
      toggled: !previousSate.toggled
    }
  })
}

// handleClick = () => {
//   this.setState( {
//     hasBeenClicked: true
//   }, () => console.log(this.state.hasBeenClicked))
//    // prints false
// }
  
  render() {
    return (
      <div>
        <p>I have been toggled {this.state.toggled ? 'on' : 'off'}!</p>
        <button onClick={this.handleClick}>{this.state.toggled ? 'OFF' : 'ON'}</button>
      </div>
    )
  }
}

export default ClickityClick


