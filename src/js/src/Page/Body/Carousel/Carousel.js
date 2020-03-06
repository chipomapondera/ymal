import React, {Component} from 'react';
import CarouselGrid from './CarouselGrid';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const carouselStyling = {
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '15px'
}

const gridStyling = {
    display: 'flex',
    position: 'relative',
    margin: '0 auto',
    overflow: 'hidden'
}

class Carousel extends Component {

    constructor(props) {
        super(props) 
        this.prev = this.prev.bind(this)
        this.next = this.next.bind(this)
        this.resetSet = this.resetSet.bind(this)
        this.state = {ref: 0, isSet: true, isReversing: false}
    }

    getOrder = (index) => {
        const {ymalProducts} = this.props
        const {ref} = this.state
        const order = index - ref

        if (order >= 0) {
            return order
        }

        return ymalProducts.length + order
    }

    resetSet = () => {
        setTimeout(()=>{
            this.setState({isSet: true})
        }, 50)
    }

    prev = () => {
        const {ref} = this.state
        const newRef = ref - 1

        if (newRef >= 0) {
            this.setState({
                ref: newRef,
                isSet: false,
                isReversing: true,
            }, this.resetSet)
        } 
    }

    next = () => {
        const {ref} = this.state
        const {ymalProducts} = this.props
        const newRef = ref + 1

        if (newRef <= ymalProducts.length) {
            this.setState({
                ref: newRef,
                isSet: false,
                isReversing: false,
            }, this.resetSet)
        } 
    }
    
    render() {
        const {ymalProducts} = this.props
        const {isSet, isReversing} = this.state

        return (
            <div style={carouselStyling}>
                <LeftArrow 
                handleClick={this.prev} 
                />
                <div style={gridStyling}> 
                    <CarouselGrid
                    ymalProducts={ymalProducts}
                    isSet={isSet}
                    isReversing={isReversing}
                    getOrder={this.getOrder}
                    />
                </div>
                <RightArrow 
                handleClick={this.next} 
                />
            </div>
        )
    }
} 

export default Carousel;