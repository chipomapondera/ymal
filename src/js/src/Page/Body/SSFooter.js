import React, { Component } from 'react';
import Container from '../Container';
import { Modal } from 'antd';
import AddSubjectForm from '../Forms/AddSubjectForm';
import { getAllSubjects } from '../../client';
import { errorNotification } from '../Body/Notification';
import SubjectContext from '../../SubjectContext';

const footerStyling = {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    backgroundColor: '#000000',
    height: '60px',
    position: 'fixed',
    bottom: '0',
    left: '0',
    right: '0',

}

const footerButtonStyling = {
    width: '150px',
    height: '30px',
    backgroundColor: 'black',
    fontSize: '10px',
    fontWeight: 'bold',
    color: 'white'
}

const SSFooter = () => {

    const { isAddSubjectModalVisible, openAddSubjectModal, closeAddSubjectModal, AddSubject } = React.useContext(SubjectContext);

    return (
        <div style={footerStyling}>
            <Container>
                <button style={footerButtonStyling} className="add-subject" onClick={openAddSubjectModal}>Add New Product +</button>
                <Modal
                    title='Add New Product'
                    visible={isAddSubjectModalVisible}
                    onOk={closeAddSubjectModal}
                    onCancel={closeAddSubjectModal}
                    width={900}
                >
                    <AddSubjectForm
                        onSuccess={(subject) => {
                            // AddSubject(subject);
                            closeAddSubjectModal();
                        }}
                        onFailure={(error) => {
                            const message = error.error.message;
                            const description = error.error.httpStatus
                            errorNotification(message, description);
                        }}
                    />
                </Modal>
            </Container>
        </div>
    );
}

export default SSFooter;
