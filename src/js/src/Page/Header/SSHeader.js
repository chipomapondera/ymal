import React from 'react';
import Container from '../Container';

const headerStyle = {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#000000', 
    height: '55px'
}

const headerText = {
    fontSize: '20px', 
    fontWeight: 'bold', 
    letterSpacing: '2px',
    wordSpacing: '15px',
    color: '#ffffff', 
    margin: '0 auto'
}

const SSHeader = (props) => {
    return(
        <div style={headerStyle}>
            <Container>
                <div style={headerText}>STYLING SERVICE</div>
            </Container>
        </div>
    );
}

export default SSHeader;