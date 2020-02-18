import React from 'react';

const YmalProductWrapper = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

const ymalProductDivStyle = {
    width: '120px', 
    border: '1px solid black', 
    margin: '30px 0 30px 30px'
}

const paragraphStyle = {
    margin: '0', 
    fontSize: '11px'
}

const textWrapper = {
    display: 'block', 
    textAlign: 'center', 
    padding: '20px 10px'
}

const removeButtonStyling = {
    marginRight: '30px', 
    width: '120px', 
    height: '30px', 
    backgroundColor: 'black', 
    fontSize: '10px', 
    fontWeight: 'bold', 
    color: 'white'
}

const YmalProduct = ({ymalProducts}) => {
    return (
        <YmalProductWrapper>
            <div>
                {ymalProducts.map((ymalProduct, index) => {
                    const {id, name, designer, colour, category} = ymalProduct
                    return (
                        <YmalProduct id={id} name={name} designer={designer} colour={colour} category={category}>
                            <div key={index} style={ymalProductDivStyle}>
                                <div style={textWrapper}>
                                    <p style={paragraphStyle}>{id}</p>
                                    <p style={paragraphStyle}>{name}</p>
                                    <p style={paragraphStyle}>{designer}</p>
                                    <p style={paragraphStyle}>{colour}</p>
                                    <p style={paragraphStyle}>{category}</p>
                                </div>
                                <div>
                                <button style={removeButtonStyling}>Remove</button>
                                </div>
                            </div>
                        </YmalProduct>
                    ) 
                } )} 
            </div>
        </YmalProductWrapper>
    )
}
export default YmalProduct;