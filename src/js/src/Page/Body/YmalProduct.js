import React from 'react';

const YmalProductWrapper = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

const YmalItem = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

const wrapperStyling = {
    display: 'flex',
    flexDirection: 'row',
    width: '1100px',
    justifyContent: 'flex-start'
}

const ymalProductDivStyle = {
    width: '120px', 
    border: '1px solid black',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    margin: '30px 15px'
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

const YmalProduct = ({ymalProducts}) => {
    return (
        <YmalProductWrapper>
            <div style={wrapperStyling}>
                {ymalProducts.map((ymalProduct, index) => {
                    const {id, name, designer, colour, category} = ymalProduct
                    return (
                        <YmalItem id={id} name={name} designer={designer} colour={colour} category={category}>
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
                        </YmalItem>
                    ) 
                } )} 
            </div>
        </YmalProductWrapper>
    )
}
export default YmalProduct;