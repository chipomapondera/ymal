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
import SubjectContext from './SubjectContext';

const getIndicator = () => {
  return <Icon type="loading" style={{fonstSize:24}} spin />
}

const App = () => {

  const state = React.useContext(SubjectContext)
  const {
    // subjects, 
    isFetching, 
    // isAddSubjectModalVisible, 
    // isAddYmalModalVisible, 
    // openAddSubjectModal, 
    // openAddYmalModal, 
    toggleFetching, 
    setNewSubjects, 
    // setDeleteSubjects, 
    // updateSubject
  } = state;

  React.useEffect(() => {
    fetchSubjects()
  }, [])

  const fetchSubjects = () => {
    toggleFetching()
    getAllSubjects()
    .then(res => res.json())
    .then(subjects => {
      // console.log(subjects);
      setNewSubjects(subjects)
      toggleFetching()
    })
    .catch(error => {
      const message = error.error.message;
      const status = error.error.httpStatus;
      errorNotification(message, status);
      console.log('message: ' + message, ', status: ' + status)
      toggleFetching()
    })
  }

    
    if(isFetching) {
      return(
        <Container>
          <Spin indicator={getIndicator()} />
        </Container>
      );
    }

    return(
      <> 
        <SSPage 
          // subjects={subjects} 
          // isFetching={isFetching}
          // isAddSubjectModalVisible={isAddSubjectModalVisible} 
          // isAddYmalModalVisible={isAddYmalModalVisible} 
          // openAddSubjectModal={openAddSubjectModal}
          // openAddYmalModal={openAddYmalModal}
          // setNewSubjects={setNewSubjects}
          // setDeleteSubjects={setDeleteSubjects}
          // updateSubject={updateSubject}
        />
      </>
    )
}

export default App;
