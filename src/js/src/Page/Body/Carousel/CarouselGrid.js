import React from 'react';
import YmalItem from '../Carousel/YmalItem';
import {deleteYmalProduct} from '../../../client';
import './CarouselStyles.scss';

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

const CarouselGrid = ({ymalProducts, isSet, isReversing, getOrder}) => {   

    const deleteProduct = (id) => { 
        deleteYmalProduct(id);
    }

    const classSet = isSet ? 'is-set' : ''
    const classReversing = isReversing ? 'is-reversing' : ''

    return (
        <YmalProductWrapper>
            <div className={`wrapperStyling ${classSet} ${classReversing}`}>
                {ymalProducts.map((ymalProduct, index) => {
                    const {id} = ymalProduct
                    return (
                        <YmalProduct> 
                            <YmalItem 
                            ymalProduct={ymalProduct}
                            key={ymalProduct}
                            style={{order: getOrder(index)}}
                            onClick={()=>deleteProduct(id)}
                            id={id}
                            />
                        </YmalProduct>
                    )} 
                )}
            </div>
        </YmalProductWrapper>
    )}

export default CarouselGrid;
