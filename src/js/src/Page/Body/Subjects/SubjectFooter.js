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
            isFetching: false,
            ymalProducts: this.props.ymalProducts
        };
        this.updateYmalProducts = this.updateYmalProducts.bind(this);
    };

    componentDidMount() {
        this.fetchSubjects();
    }

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
        this.props = ymalProduct
        console.log(ymalProduct)
        const newYmalProductsList = this.state.ymalProducts;
        newYmalProductsList.push(ymalProduct)
        this.setState(() => {
            return {ymalProducts: newYmalProductsList}
        })
        console.log(this.state.ymalProducts);
        return this.state.ymalProducts; 
    }
    
    fetchSubjects = () => {
        this.setState(() => {
            return {isFetching: true}
        });
        getAllSubjects()
        .then(res => res.json())
        .then(subjects => {
            this.setState(() => {
                return {
                    subjects,
                    isFetching: true
                }
            });
        })
        .catch(error => {
            const message = error.error.message;
            const status = error.error.httpStatus;
            errorNotification(message, status);
            console.log('message: ' + message, ', status: ' + status)
            this.setState(() => {
              return {isFetching: false}
            });
        })
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
                            onSuccess={() => {
                                this.closeAddYmalModal();
                                this.updateYmalProducts(ymalProduct);
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
