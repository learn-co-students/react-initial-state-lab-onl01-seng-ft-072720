import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) {
        super(props)
        this.state = {secondsLeft: props.initialCount}
    }

    // decrease = () => {
    //     const newSecondsLeft = this.state.secondsLeft - 1
    //     this.setState({
    //       count: newSecondsLeft
    //     })
    //   }
  
  render() {
    if(this.state.secondsLeft === 0) {
    return <h4>Boom!</h4>
}
    else {
    return <div>{this.state.secondsLeft} seconds left before I go boom!</div>
    }
}
}