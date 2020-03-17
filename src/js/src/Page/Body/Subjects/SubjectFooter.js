import React, { Component } from 'react';
import Container from '../../Container';
import {Modal} from 'antd';
import AddYmalProductForm from '../../Forms/AddYmalProductForm';
import {getAllSubjects} from '../../../client';
import {errorNotification} from '../Notification';
import './SubjectFooterStyles.scss';

const bottomBanner = {
    display: 'flex',
    alignItems: 'center', 
    backgroundColor: '#dedede', 
    height: '50px',
}

const buttonDivStyling ={
    display: 'flex',
    justifyContent: 'space-between'
}

const ymalButtonStyling = {
    marginLeft: '30px', 
    width: '130px', 
    height: '30px', 
    backgroundColor: 'black', 
    fontSize: '10px', 
    fontWeight: 'bold', 
    color: 'white'
}

const saveButtonStyling = {
    marginRight: '30px', 
    width: '120px', 
    height: '30px', 
    backgroundColor: 'black', 
    fontSize: '10px', 
    fontWeight: 'bold', 
    color: 'white'
}

class SubjectFooter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAddYmalModalVisible: false,
            // isFetching: false
        }
    };

    openAddYmalModal = (subjectId) => {
        this.setState({isAddYmalModalVisible: true})
        this.props = subjectId
        console.log('button subjectId: ' + subjectId)
        
    }
    
    closeAddYmalModal = () => {
        this.setState({isAddYmalModalVisible: false})
    }
    
    fetchSubjects = () => {
        this.setState({
            isFetching: true
        });
        getAllSubjects()
        .then(res => res.json())
        .then(subjects => {
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
        const {isAddYmalModalVisible} = this.state;
        const {subjectId} = this.props

        return(
            <div style={bottomBanner}>
                <Container>
                    <div style={buttonDivStyling}>
                        <button style={ymalButtonStyling} onClick={this.openAddYmalModal.bind(this, subjectId)}>Add YMAL Products</button>
                        <button style={saveButtonStyling}>Save</button>
                    </div>
                    <Modal
                        title='Add YMAL Product'
                        visible={isAddYmalModalVisible}
                        onOk={this.closeAddYmalModal}
                        onCancel={this.closeAddYmalModal}
                        width={900}
                    >
                        <AddYmalProductForm 
                            onSuccess={() => {
                                this.closeAddYmalModal();
                                this.fetchSubjects();
                            }} 
                            onFailure={(error) => {
                                const message = error.error.message;
                                const description = error.error.httpStatus
                                errorNotification(message, description);
                            }}
                            subjectId={subjectId}
                        />
                    </Modal>
                </Container>
            </div>
        )
    }
}

export default SubjectFooter;
