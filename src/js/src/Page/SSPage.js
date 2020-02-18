import React from 'react';
import Container from './Container';
import SSHeader from './Header/SSHeader';
import SSBody from './Body/SSBody';

const SSPage = ({subjects, ymalProducts}) => {
    
    if(subjects && subjects.length) {
        return (
            <Container>
                <SSHeader />
                <SSBody subjects={subjects} ymalProducts={ymalProducts} />
            </Container>
        )
    }

    return (
        <Container>
            <SSHeader />
            <h1>No products found</h1>
        </Container>
    )
}

export default SSPage;
