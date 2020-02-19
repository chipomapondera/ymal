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

const SSBody = ({subjects, ymalProducts, isAddSubjectModalVisible, isAddYmalModalVisible, openAddSubjectModal, openAddYmalModal}) => {
    return (
        <BodyWrapper style={bodyStyling}>
                <Subject 
                    subjects={subjects} 
                    ymalProducts={ymalProducts} 
                    isAddYmalModalVisible={isAddYmalModalVisible}
                    openAddSubjectModal={openAddSubjectModal} 
                />
                <SSFooter 
                    isAddSubjectModalVisible={isAddSubjectModalVisible} 
                    openAddYmalModal={openAddYmalModal} 
                />
        </BodyWrapper>
    )
}

export default SSBody;