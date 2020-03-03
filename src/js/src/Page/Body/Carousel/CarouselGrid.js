import React from 'react';
import YmalItem from '../Carousel/YmalItem';
import {deleteYmalProduct} from '../../../client';

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

const gridStyling = {
    position: 'relative',
    // height: '100vh',
    // width: '100vw',
    margin: '0 auto',
    overflow: 'hidden'
}

const wrapperStyling = {
    display: 'flex',
    flexDirection: 'row',
    width: '1100px',
    justifyContent: 'flex-start'
}

const CarouselGrid = ({ymalProducts, activeIndex}) => {    

    const deleteProduct = (id) => { 
        deleteYmalProduct(id);
    }
    console.log('this is the list' + ymalProducts)
    return (
        <div style={gridStyling}> 
        <YmalProductWrapper>
            <div style={wrapperStyling}>
                {ymalProducts.map((ymalProduct, index) => {
                    const {id} = ymalProduct
                    return (
                        <YmalProduct> 
                            <YmalItem 
                            ymalProduct={ymalProduct}
                            onClick={()=>deleteProduct(id)}
                            id={id}
                            activeIndex={activeIndex}
                            />
                        </YmalProduct>
                    )} 
                )}
            </div>
        </YmalProductWrapper>
    </div>
)}

export default CarouselGrid;
