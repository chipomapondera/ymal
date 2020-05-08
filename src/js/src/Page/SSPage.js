import React from 'react';
import Container from './Container';
import SSHeader from './Header/SSHeader';
import Subjects from '../Page/Body/Subjects/Subjects';
import SSFooter from './Body/SSFooter';
import {Empty} from 'antd';

const emptyLogo = {
    marginTop: '150px'
}

const BodyWrapper = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

const bodyStyling = {
    display: 'flex',
    flexDirection: 'row'
}

const SSPage = ({subjects, isFetching, isAddSubjectModalVisible, isAddYmalModalVisible, openAddSubjectModal, openAddYmalModal, setNewSubjects}) => {
    if(subjects && subjects.length) {
        return (
            <Container>
                <SSHeader />
                <BodyWrapper style={bodyStyling}> 
                    <Subjects 
                        subjects={subjects} 
                        isFetching={isFetching}
                        isAddYmalModalVisible={isAddYmalModalVisible}
                        openAddSubjectModal={openAddSubjectModal} 
                    />
                    <SSFooter 
                        isFetching={isFetching}
                        isAddSubjectModalVisible={isAddSubjectModalVisible} 
                        openAddYmalModal={openAddYmalModal} 
                        setNewSubjects={setNewSubjects}
                    />
                </BodyWrapper>
            </Container>
        )
    }

    return (
        <Container>
            <SSHeader />
            <Empty style={emptyLogo} description={<h1 style={{fontSize: '22px'}}>No products found</h1>} />
            <SSFooter />
        </Container>
    )
}

export default SSPage;
