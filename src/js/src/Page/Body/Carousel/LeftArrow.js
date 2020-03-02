import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';

const arrowWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    margin: "0px 15px 0px 0px",
    backgroundColor: "red"
}

const arrowStyling = {
    height: "2em",
    width: "2em"
}

const LeftArrow = () => {
        return (
            <div 
            style={arrowWrapper}
                // onClick={this.props.goBack}
            >
                <FaChevronLeft 
                style={arrowStyling}
                // aria-hidden='true'
                />
            </div>
        )
}

export default LeftArrow;