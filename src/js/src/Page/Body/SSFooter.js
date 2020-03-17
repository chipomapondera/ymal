import React, { Component } from 'react';
import Container from '../Container';
import {Modal} from 'antd';
import AddSubjectForm from '../Forms/AddSubjectForm';
import {getAllSubjects} from '../../client';
import {errorNotification} from '../Body/Notification';

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

class SSFooter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            subjects: [],
            isAddSubjectModalVisible: false,
            isFetching: false
        };
    };

    openAddSubjectModal = () => {
        this.setState({isAddSubjectModalVisible: true})
    };

    closeAddSubjectModal = () => {
        this.setState({isAddSubjectModalVisible: false})
        this.handleSubmit()
    };

    handleSubmit = () => {
        this.setState({
            isFetching: true
          });
        getAllSubjects()
        .then(res => res.json())
        .then(subjects => {
            console.log('new subjects added' + subjects);
            this.setState({
                subjects,
                isFetching: false
            });
        })
        .catch(error => {
            const message = error.error.message;
            const description = error.error.error;
            errorNotification(message, description);
            console.log(message)
            this.setState({
              isFetching: false
            });
        })
    }

    render() {
        const {isAddSubjectModalVisible} = this.state;
        return(
            <div style={footerStyling}>
                <Container>
                    <button style={footerButtonStyling} onClick={this.openAddSubjectModal}>Add New Product +</button>
                    <Modal
                        title='Add New Product'
                        visible={isAddSubjectModalVisible} 
                        onOk={this.closeAddSubjectModal}
                        onCancel={this.closeAddSubjectModal}
                        width={900}
                    >
                        <AddSubjectForm 
                            onSuccess={() => {
                                this.closeAddSubjectModal();
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
}

export default SSFooter;
