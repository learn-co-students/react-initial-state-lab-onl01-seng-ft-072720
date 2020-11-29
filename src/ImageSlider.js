import React, {Component} from 'React'

export default class ImageSlider extends Component {
    constructor (props) {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }
    render () {
        return (
            <h1>I am on slide {this.state.currentSlideIndex}</h1>
        )

    }
}