import React, { Component } from 'react';
import Container from '../Container';
import {Modal} from 'antd';
import AddYmalProductForm from '../Forms/AddYmalProductForm';
import {getAllSubjects, getAllYmalProducts} from '../../client';

const bottomBanner = {
    display: 'flex',
    alignItems: 'center', 
    backgroundColor: '#dedede', 
    height: '60px',
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

class ProductFooter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAddYmalModalVisible: false,
            // isFetching: false
        }
    };

    openAddYmalModal = () => {
        this.setState({isAddYmalModalVisible: true})
      }
      closeAddYmalModal = () => {
        this.setState({isAddYmalModalVisible: false})
        this.fetchSubjects()
      }

      fetchSubjects = () => {
        this.setState({
            isFetching: true
        });
        getAllSubjects()
        .then(res => res.json())
        .then(subjects => {
            console.log(subjects);
            this.setState({
                subjects,
                isFetching: false
            })
        });
    }

    // fetchYmalProducts = () => {
    //     this.setState({
    //         isFetching: true
    //     });
    //     getAllYmalProducts()
    //     .then(res => res.json())
    //     .then(ymalProducts => {
    //         console.log(ymalProducts);
    //         this.setState({
    //             ymalProducts,
    //             isFetching: false
    //         })
    //     });
    // }

    render() {
        const {isAddYmalModalVisible} = this.state;
        return(
            <div style={bottomBanner}>
                <Container>
                    <div style={buttonDivStyling}>
                        <button style={ymalButtonStyling} onClick={this.openAddYmalModal}>Add YMAL Products</button>
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
                        onSuccess={this.closeAddYmalModal} 
                        />
                    </Modal>
                </Container>
            </div>
        )
    }
}

export default ProductFooter;
