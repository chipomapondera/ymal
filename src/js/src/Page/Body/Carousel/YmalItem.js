import React from 'react';

const ymalProductDivStyle = {
    minWidth: '120px', 
    border: '1px solid black',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    margin: "30px 7px 30px 5px"
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

const YmalItem = ({ymalProduct, onClick}) => {
    const {id, name, designer, colour, category} = ymalProduct
    return (
        <div
        // className={index === activeIndex ? 'active' : 'inactive'}
        style={ymalProductDivStyle}
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
