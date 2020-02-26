import React from 'react';
import Container from './Container';
import SSHeader from './Header/SSHeader';
import SSBody from './Body/SSBody';

const SSPage = ({subjects, ymalProducts, isFetching, isAddSubjectModalVisible, isAddYmalModalVisible, openAddSubjectModal, openAddYmalModal}) => {
    
    if(subjects && subjects.length) {
        return (
            <Container>
                <SSHeader />
                <SSBody 
                    subjects={subjects} 
                    ymalProducts={ymalProducts} 
                    isFetching={isFetching}
                    isAddSubjectModalVisible={isAddSubjectModalVisible} 
                    isAddYmalModalVisible={isAddYmalModalVisible}
                    openAddSubjectModal={openAddSubjectModal} 
                    openAddYmalModal={openAddYmalModal} 
                />
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
