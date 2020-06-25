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
            ymalProducts: this.props.ymalProducts
        };
        this.updateYmalProducts = this.updateYmalProducts.bind(this);
    };

    openAddYmalModal = (subjectId) => {
        this.setState(() => {
            return {isAddYmalModalVisible: true}
        });
        this.props = subjectId
        console.log('button subjectId: ' + subjectId) 
    }
    
    closeAddYmalModal = () => {
        this.setState(() => {
            return {isAddYmalModalVisible: false}
        });
    } 

    updateYmalProducts = (ymalProduct) => {
        const newYmalProductsList = this.state.ymalProducts;
        newYmalProductsList.push(ymalProduct)
        this.setState(() => {
            return {ymalProducts: newYmalProductsList}
        }) 
        this.props.updateYmalProductList(this.state.ymalProducts, this.props.subjectId)
        console.log(this.state.ymalProducts);
        return this.state.ymalProducts; 
    }

    render() {
        const {isAddYmalModalVisible} = this.state;
        const {subjectId, ymalProduct} = this.props
        // console.log('render', this.props, this.state);

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
                            onSuccess={(ymalProductCreated) => {
                                this.closeAddYmalModal();
                                this.updateYmalProducts(ymalProductCreated);
                            }} 
                            onFailure={(error) => {
                                const message = error.message;
                                const description = error.httpStatus
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
