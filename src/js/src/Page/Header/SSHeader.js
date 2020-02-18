import React from 'react';
import Container from '../Container';

const headerStyle = {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#000000', 
    height: '80px'
}

const headerText = {
    fontSize: '14px', 
    fontWeight: 'bold', 
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