import React, { Component } from 'react';
import CarouselGrid from './CarouselGrid';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const carouselStyling = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "25px"
}

class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div style={carouselStyling}> 
                <LeftArrow />
                <CarouselGrid ymalProducts={this.props.ymalProducts} />
                <RightArrow />
            </div>
        )
    }
}

export default Carousel;