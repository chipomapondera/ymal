import React from 'react';
import Subject from './Subject';
import SSFooter from './SSFooter';

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

const SSBody = ({subjects, ymalProducts, isFetching, isAddSubjectModalVisible, isAddYmalModalVisible, openAddSubjectModal, openAddYmalModal}) => {
    return (
        <BodyWrapper style={bodyStyling}>
                <Subject 
                    subjects={subjects} 
                    // ymalProducts={ymalProducts} 
                    isFetching={isFetching}
                    isAddYmalModalVisible={isAddYmalModalVisible}
                    openAddSubjectModal={openAddSubjectModal} 
                />
                <SSFooter 
                    isFetching={isFetching}
                    isAddSubjectModalVisible={isAddSubjectModalVisible} 
                    openAddYmalModal={openAddYmalModal} 
                />
        </BodyWrapper>
    )
}

export default SSBody;