import React from 'react';
import Container from './Container';
import SSHeader from './Header/SSHeader';
import SSBody from './Body/SSBody';
import Footer from './Body/SSFooter';
import {Empty} from 'antd';

const emptyLogo = {
    marginTop: '150px'
}

const SSPage = ({subjects, ymalProducts, isFetching, isAddSubjectModalVisible, isAddYmalModalVisible, openAddSubjectModal, openAddYmalModal}) => {
    
    if(subjects && subjects.length) {
        return (
            <Container>
                <SSHeader />
                <SSBody 
                    subjects={subjects} 
                    // ymalProducts={ymalProducts} 
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
            <Empty style={emptyLogo} description={<h1 style={{fontSize: '22px'}}>No products found</h1>} />
            <Footer />
        </Container>
    )
}

export default SSPage;
