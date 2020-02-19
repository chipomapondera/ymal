import React, { Component } from 'react';
import Container from '../Container';
import {Modal} from 'antd';

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
            isAddSubjectModalVisible: false
        }
    };

    openAddSubjectModal = () => {
        this.setState({isAddSubjectModalVisible: true})
      }
    closeAddSubjectModal = () => {
        this.setState({isAddSubjectModalVisible: false})
    };

    render() {
        const {isAddSubjectModalVisible} = this.state;
        return(
            <div style={footerStyling}>
                <Container>
                    <button style={footerButtonStyling} onClick={this.openAddSubjectModal}>Add new Product +</button>
                    <Modal
                        title='Add new Product'
                        visible={isAddSubjectModalVisible} 
                        onOk={this.closeAddSubjectModal}
                        onCancel={this.closeAddSubjectModal}
                        width={900}
                    >
                        <h1>Add a new Product</h1>
                    </Modal>
                </Container>
            </div>
        );
    }
}

export default SSFooter;
