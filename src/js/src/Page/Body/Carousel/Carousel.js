import React, {Component} from 'react';
import CarouselGrid from './CarouselGrid';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import update from 'immutability-helper';
import {getAllSubjects} from '../../../client';
import {errorNotification} from '../../Body/Notification';

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
        this.state = {ref: 0, isSet: true, isReversing: false, ymalProducts: []}
    }

    // fetchSubjects = () => {
    //     this.setState(() => {
    //         return {isFetching: true}
    //     });
    //     getAllSubjects()
    //     .then(res => res.json())
    //     .then(subjects => {
    //         this.setState(() => {
    //             return {
    //                 subjects,
    //                 isFetching: true
    //             }
    //         });
    //     })
    //     .catch(error => {
    //         const message = error.error.message;
    //         const status = error.error.httpStatus;
    //         errorNotification(message, status);
    //         console.log('message: ' + message, ', status: ' + status)
    //         this.setState(() => {
    //           return {isFetching: false}
    //         });
    //     })
    // }

    getOrder = (index) => {
        const {ymalProducts} = this.props
        const {ref} = this.state
        const order = index - ref

        if (order >= 0) {
            return order
        }

        return ymalProducts.length + order
        // console.log('getOrder has been called ' + addition)
    }

    resetSet = () => {
        setTimeout(() => {
            this.setState(() => {
                return {isSet: true}
            });
        }, 50)
    }

    prev = () => {
        const {ref} = this.state
        const newRef = ref - 1

        if (newRef >= 0) {
            this.setState(() => {
                return {
                    ref: newRef,
                    isSet: false,
                    isReversing: true,
                }, this.resetSet
            }
        )} 
    }

    next = () => {
        const {ref} = this.state
        const {ymalProducts} = this.props
        const newRef = ref + 1

        if (newRef <= ymalProducts.length) {
            this.setState(() => {
                return {
                    ref: newRef,
                    isSet: false,
                    isReversing: false,
                }, this.resetSet
            }
        )} 
    }

    moveYmalProduct = (dragIndex, hoverIndex) => {
        const {ymalProducts} = this.state
        const draggedYmalProduct = ymalProducts[dragIndex];
        const updatedYmalProducts = update(ymalProducts, {
            $splice: [[dragIndex, 1], [hoverIndex, 0, draggedYmalProduct]]
        })
        this.setState(() => {
            return {ymalProducts: updatedYmalProducts}
            // console.log('the moveProduct function is called')
        });
    };
    
    render() {
        const {ymalProducts} = this.props
        const index = ymalProducts.index
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
                    getOrder={this.getOrder.bind(this, index)}
                    moveYmalProduct={this.moveYmalProduct.bind(this)}
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