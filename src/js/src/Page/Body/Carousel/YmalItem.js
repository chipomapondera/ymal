import React, {useRef} from 'react';
import {useDrag, useDrop} from 'react-dnd';

const ymalProductDivStyle = {
    minWidth: '120px', 
    border: '1px solid black',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    margin: "30px 7px 30px 5px",
    backgroundColor: 'white',
    opacity: 1
}

const paragraphStyle = {
    margin: '0', 
    fontSize: '11px'
}

const textWrapper = {
    display: 'block', 
    textAlign: 'center', 
    padding: '10px 10px 5px'
}

const removeButtonStyling = {
    width: '70px', 
    height: '15px', 
    backgroundColor: 'white',
    border: '1px solid white', 
    fontSize: '10px', 
    textDecoration: 'underline',
    color: 'black',
    padding: '0',
    marginBottom: '10px'
}

const type = "YmalProduct";

const YmalItem = ({ymalProduct, index, moveYmalProduct, onClick}) => {

    // console.log('this is the index: ' + index)
    const {id, name, designer, colour, category} = ymalProduct
    const ref = useRef(null);
    const [, drop] = useDrop({
        accept: type,
        hover(ymalProduct) {
            if (!ref.current) {
                return;
            }

            const dragIndex = ymalProduct.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }
            moveYmalProduct(dragIndex, hoverIndex);
            ymalProduct.index = hoverIndex
        }
    });
    const [{isDragging}, drag] = useDrag({
        item: {type, id: ymalProduct.id, index},
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    drag(drop(ref));

    return (
        <div
        // className={index === activeIndex ? 'active' : 'inactive'}
        ref={ref}
        style={ymalProductDivStyle}
        // style={{ opacity: isDragging ? 0 : 1 }}
        >
            <div style={textWrapper}>
                <p style={paragraphStyle}>{id}</p>
                <p style={paragraphStyle}>{name}</p>
                <p style={paragraphStyle}>{designer}</p>
                <p style={paragraphStyle}>{colour}</p>
                <p style={paragraphStyle}>{category}</p>
            </div>
            <div>
                <button style={removeButtonStyling} onClick={onClick} >Remove</button>
            </div>
        </div>
    )
}

export default YmalItem;
