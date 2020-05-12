// Code ClickityClick Component Here
import React, { isValidElement } from 'react'

class ClickityClick extends React.Component {
    constructor() {
        super();
        this.state = {
            hasBeenClicked: false
        }
    }
    handleClick = () => {
        this.setState(previousState => {
            return {
                hasBeenClicked: !previousState.hasBeenClicked
            }
        })
    }
    render() {
        return(
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>CLick me!</button>
            </div>
        )
    }
}
export default ClickityClick