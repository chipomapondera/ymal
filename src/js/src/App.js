import React, { Component} from 'react';
import Container from './Page/Container';
import SSPage from './Page/SSPage';
import './App.css';
import {getAllSubjects} from './client';
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
      isFetching: false,
      isAddSubjectModalVisible: false,
      isAddYmalModalVisible: false,
    }
  }

  componentDidMount() {
    this.fetchSubjects();
  }

  openAddSubjectModal = () => {
    this.setState(() => {
      return {isAddSubjectModalVisible: true}
    });
  }

  closeAddSubjectModal = () => {
    this.setState(() => {
      return {isAddSubjectModalVisible: false}
    });
  }

  openAddYmalModal = () => {
    this.setState(() => {
      return {isAddYmalModalVisible: true}
    });
  }

  closeAddYmalModal = () => {
    this.setState(() => {
      return {isAddYmalModalVisible: false}
    });
  }

  fetchSubjects = () => {
    this.setState(() => {
      return {isFetching: true}
    });
    getAllSubjects()
    .then(res => res.json())
    .then(subjects => {
      console.log(subjects);
      this.setState(() => {
        return {
          subjects,
          isFetching: false
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

  updateSubject = (updatedSubject) => {
    // We have arry of subjects
      // One of the subjects has updated
      // Find that index in the array
      // And set it to the new updated subject
    let newSubjects = this.state.subjects;
    let index = newSubjects.findIndex(subject => subject.id == updatedSubject.id);
    newSubjects[index] = updatedSubject;
    this.setState(() => {
      return {
        subjects: newSubjects
      }
    })
  }

  setNewSubjects = (newSubjects) => {
    this.setState(() => {
      return {
        subjects: newSubjects
      }
    });
  }

  setDeleteSubjects = (id) => {
    let subjects = this.state.subjects
    let index = subjects.findIndex(subject => subject.id == id)
    subjects.splice(index, 1)
    this.setState(() => {
      return { 
        subjects
      }
    });
  }

  render() {

    const {subjects, isFetching, isAddSubjectModalVisible, isAddYmalModalVisible} = this.state;

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
        isFetching={isFetching}
        isAddSubjectModalVisible={isAddSubjectModalVisible} 
        isAddYmalModalVisible={isAddYmalModalVisible} 
        openAddSubjectModal={this.openAddSubjectModal.bind(this)}
        openAddYmalModal={this.openAddYmalModal.bind(this)}
        setNewSubjects={this.setNewSubjects.bind(this)}
        setDeleteSubjects={this.setDeleteSubjects.bind(this)}
        updateSubject={this.updateSubject.bind(this)}
      />
    )
  }
}

export default App;
