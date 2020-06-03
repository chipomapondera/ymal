import React from 'react';
import YmalItem from '../Carousel/YmalItem';
import { deleteYmalProduct } from '../../../client';
import './CarouselStyles.scss';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { notification } from 'antd';

const CarouselGrid = ({ ymalProducts, isSet, isReversing, getOrder, moveYmalProduct }) => {

    // console.log('this is the ymalProducts array ' + ymalProducts)

    const openNotificationWithIcon = (type, message, description) => notification[type]({ message, description })

    const deleteProduct = (id) => {
        deleteYmalProduct(id).then(() => {
            openNotificationWithIcon('success', 'Product deleted', `Product ${id} was deleted`);
        }).catch(error => {
            openNotificationWithIcon('error', 'error', `(${error.error.message} ${error.error.httpStatus}`)
        });
    }

    const classSet = isSet ? 'is-set' : ''
    const classReversing = isReversing ? 'is-reversing' : ''

    return (
        <DndProvider backend={HTML5Backend}>
            <div>
                <div className={`wrapperStyling ${classSet} ${classReversing}`}>
                    {ymalProducts.map((ymalProduct, index) => {
                        const { id } = ymalProduct
                        return (
                            <div>
                                <YmalItem
                                    ymalProduct={ymalProduct}
                                    index={index}
                                    key={ymalProduct}
                                    style={{ order: getOrder(index) }}
                                    onClick={() => deleteProduct(id)}
                                    moveYmalProduct={moveYmalProduct}
                                    id={id}
                                />
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        </DndProvider>
    )
}

export default CarouselGrid;
