// Code ClickityClick Component Here
import React from 'react'
export default class ClickityClick extends React.Component{
    constructor(){
        super();
        this.state={
            hasBeenClicked:false
        }
    }
    handleClick=()=> {
        this.setState({
            hasBeenClicked: true
          })
    }
    render(){
        return (
            <div>
              <p>I have been {this.state.hasBeenClicked? null : `not`} been clicked</p>
                <button onClick={this.handleClick}></button>

            </div>
        )
    }
}