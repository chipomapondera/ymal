import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const arrowWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px 0px 0px 15px",
    backgroundColor: "red"
}

const arrowStyling = {
    height: "2em",
    width: "2em"
}

const RightArrow = () => {
    return (
        <div 
        style={arrowWrapper}
        // onClick={this.props.goBack}
        >
            <FaChevronRight 
            style={arrowStyling}
            // aria-hidden='true'
            />
        </div>
    )
}

export default RightArrow;