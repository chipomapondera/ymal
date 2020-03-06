import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';

const arrowWrapper = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0px 15px 0px 0px',
    cursor: 'pointer'
    // backgroundColor: "red"
}

const arrowStyling = {
    height: "2em",
    width: "2em"
}

const LeftArrow = ({handleClick}) => {
        return (
            <div 
            style={arrowWrapper}
            onClick={handleClick}
            >
                <FaChevronLeft 
                style={arrowStyling}
                />
            </div>
        )
}

export default LeftArrow;