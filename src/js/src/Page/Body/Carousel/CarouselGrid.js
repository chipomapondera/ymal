import React from 'react';
import YmalItem from '../Carousel/YmalItem';
import {deleteYmalProduct} from '../../../client';
import './CarouselStyles.scss';
import {DndProvider} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const YmalProductWrapper = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

const YmalProduct = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

const CarouselGrid = ({ymalProducts, isSet, isReversing, getOrder, moveYmalProduct}) => { 
    
    console.log('this is the ymalProducts array ' + ymalProducts)

    const deleteProduct = (id) => { 
        deleteYmalProduct(id);
    }

    const classSet = isSet ? 'is-set' : ''
    const classReversing = isReversing ? 'is-reversing' : ''

    return (
        <DndProvider backend={HTML5Backend}> 
            <YmalProductWrapper>
                <div className={`wrapperStyling ${classSet} ${classReversing}`}>
                    {ymalProducts.map((ymalProduct, index) => {
                        const {id} = ymalProduct
                        return (
                            <YmalProduct > 
                                <YmalItem 
                                ymalProduct={ymalProduct}
                                index={index}
                                key={ymalProduct}
                                style={{order: getOrder(index)}}
                                onClick={()=>deleteProduct(id)}
                                moveYmalProduct={moveYmalProduct}
                                id={id}
                                />
                            </YmalProduct>
                        )} 
                    )}
                </div>
            </YmalProductWrapper>
        </DndProvider>
    )}

export default CarouselGrid;
