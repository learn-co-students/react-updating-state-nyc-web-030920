// Code ClickityClick Component Here
import React from 'react'

export default class ClickityClick extends React.Component{
    constructor() {
        super()
        this.state = {
            hasBeenClicked: false,
            count: 0,
            toggled: false
        }
    }

    handleClick = () => {
        let newCount = this.state.count + 1
        this.setState({
            hasBeenClicked: true,
            count: newCount
        }, () => console.log(this.state.hasBeenClicked, this.state.count))

        //pass previousState to setState
        // this.setState(previousState => {
        //     return {
        //         count: previousState.count += 1
        //     }
        // })
        this.setState(previousState => {
            return{
                toggled: !previousState.toggled
            }
        })
    }

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button
                // onClick={()=>{this.handleClick()}}
                onClick={this.handleClick}
                >{this.state.toggled?'ON':'OFF'}</button>
            </div>
        )
    }
}

