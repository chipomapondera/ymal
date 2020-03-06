import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const arrowWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px 0px 0px 15px",
    cursor: 'pointer'
    // backgroundColor: "red"
}

const arrowStyling = {
    height: "2em",
    width: "2em"
}

const RightArrow = ({handleClick}) => {
    return (
        <div 
        style={arrowWrapper}
        onClick={handleClick}
        >
            <FaChevronRight 
            style={arrowStyling}
            />
        </div>
    )
}

export default RightArrow;