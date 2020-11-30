import React, { Component } from 'react';

class Bomb extends Component {
    constructor(props) {
        super();
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    countDown = () => {
        if (this.state.secondsLeft != 0) {
            return `${this.state.secondsLeft} seconds left before I go boom!`
        } else {
            return `Boom!`
        }
    }
  render() {
   return (
       <h2>{this.countDown()}</h2>
   )
  }
}

export default Bomb; // Don’t forget to use export default!