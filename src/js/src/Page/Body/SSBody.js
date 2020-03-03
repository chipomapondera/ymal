import React from 'react';
import Subject from './Subject';
import SSFooter from './SSFooter';
import {deleteSubject} from '../../client';

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

const deleteSubjectProduct = (id) => {
    deleteSubject(id)
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
                    onClick={()=>deleteSubjectProduct()}
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