import React from 'react';
import Container from '../Container';

const footerStyling = {
    display: 'flex', 
    justifyContent: 'space-around', 
    alignItems: 'center', 
    backgroundColor: '#000000', 
    height: '80px'
}

const footerButtonStyling = {
    width: '150px', 
    height: '30px', 
    backgroundColor: 'black', 
    fontSize: '10px', 
    fontWeight: 'bold', 
    color: 'white'
}

const SSFooter = (props) => {
    return(
        <div style={footerStyling}>
            <Container>
                <button style={footerButtonStyling}>Add new Product +</button>
            </Container>
        </div>
    );
}

export default SSFooter;
