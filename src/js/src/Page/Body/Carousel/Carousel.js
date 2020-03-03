import React, { Component } from 'react';
import CarouselGrid from './CarouselGrid';
import ymalProducts from './CarouselGrid';
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
            activeIndex: 0,
            length: ymalProducts.length
        }
    }

    goBack = () => {
        let index = this.state.activeIndex;
        let length = this.state.length
    
        if(index < 1) {
            index = length - 1;
        } else {
            index--;
        }
    
        this.setState({
            activeIndex: index
        });
    }
    
    goForward = () => {
        let index = this.state.activeIndex;
        let length = this.state.length;
    
        if(index === length-1) {
            index = 0
        } else {
            index++;
        }
    
        this.setState({
            activeIndex: index
        })
    }

    render() {
        return (
            <div style={carouselStyling}> 
                <LeftArrow 
                    onclick={() => this.goBack()}
                />
                <CarouselGrid 
                    ymalProducts={this.props.ymalProducts} 
                    activeIndex={this.state.activeIndex}
                />
                <RightArrow 
                    onclick={() => this.goForward()}
                />
            </div>
        )
    }
}

export default Carousel;