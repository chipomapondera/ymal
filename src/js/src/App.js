import React, { Component} from 'react';
import Container from './Page/Container';
import SSPage from './Page/SSPage';
import './App.css';
import {getAllSubjects, getAllYmalProducts} from './client';
import {errorNotification} from './Page/Body/Notification';
import {
  Spin,
  Icon
} from 'antd';

const getIndicator = () => {
  return <Icon type="loading" style={{fonstSize:24}} spin />
}

class App extends Component {

  constructor(props) {
      super(props)
      this.state = {
      subjects: [],
      // ymalProducts: [],
      isFetching: false,
      isAddSubjectModalVisible: false,
      isAddYmalModalVisible: false,
    }
  }

  componentDidMount() {
    this.fetchSubjects();
    // this.fetchYmalProducts();
  }

  openAddSubjectModal = () => {
    this.setState({isAddSubjectModalVisible: true})
  }
  closeAddSubjectModal = () => {
    this.setState({isAddSubjectModalVisible: false})
  }

  openAddYmalModal = () => {
    this.setState({
      isAddYmalModalVisible: true
    })
  }
  closeAddYmalModal = () => {
    this.setState({
      isAddYmalModalVisible: false,
    });
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

  // fetchYmalProducts = () => {
  //   this.setState({
  //     isFetching: true
  //   });
  //   getAllYmalProducts()
  //     .then(res => res.json())
  //     .then(ymalProducts => {
  //        console.log(ymalProducts);
  //        this.setState({
  //          ymalProducts,
  //          isFetching: false
  //       });
  //     })
  //     .catch(error => {
  //       const message = error.error.message;
  //       const description = error.error.error;
  //       errorNotification(message, description);
  //       console.log(message)
  //       this.setState({
  //         isFetching: false
  //       })
  //     })
  // }

  render() {

    const {subjects, ymalProducts, isFetching, isAddSubjectModalVisible, isAddYmalModalVisible} = this.state;

    if(isFetching) {
      return(
        <Container>
          <Spin indicator={getIndicator()} />
        </Container>
      );
    }

    return(
      <SSPage 
        subjects={subjects} 
        // ymalProducts={ymalProducts} 
        isFetching={isFetching}
        isAddSubjectModalVisible={isAddSubjectModalVisible} 
        isAddYmalModalVisible={isAddYmalModalVisible} 
        openAddSubjectModal={this.openAddSubjectModal.bind(this)}
        openAddYmalModal={this.openAddYmalModal.bind(this)}
      />
    )
  }
}

export default App;
