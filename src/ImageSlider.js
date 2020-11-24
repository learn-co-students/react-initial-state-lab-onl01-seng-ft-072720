import React, { Component } from 'react';

export default class ImageSlider extends Component {
    constructor(props) {
        super(props)
        this.state = {currentSlideIndex: 0}
    }

    
  
  render() {
    return (<h4>I am on slide {this.state.currentSlideIndex}</h4>)
  }
  
}
