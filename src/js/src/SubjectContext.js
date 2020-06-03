import React from 'react'

const initialState = {
    subjects: [],
    isFetching: false,
    isAddSubjectModalVisible: false,
    isAddYmalModalVisible: false,
    toggleFetching: () => {},
    openAddSubjectModal: () => {},
    closeAddSubjectModal: () => {},
    openAddYmalModal: () => {},
    closeAddYmalModal: () => {},
    updateSubject: () => {},
    AddSubject: () => {},
    setNewSubjects: () => {},
    setDeleteSubjects: () => {}
}

const SubjectContext = React.createContext({...initialState})

export const SubjectProvider = (props) => {
    const [state, setState] = React.useState({...initialState});

    const toggleFetching = () => {
        setState(prevState => ({
            ...prevState,
            isFetching: !prevState.isFetching
        }))
    }

    const openAddSubjectModal = () => {
        setState(prevState => ({
            ...prevState,
            isAddSubjectModalVisible: true
        }))
    }

    const closeAddSubjectModal = () => {
        setState(prevState => ({
            ...prevState,
            isAddSubjectModalVisible: false
        }))
    }

    const openAddYmalModal = () => {
        setState(prevState => ({
            ...prevState,
            isAddYmalModalVisible: true
        }))
    }

    const closeAddYmalModal = () => {
        setState(prevState => ({
            ...prevState,
            isAddYmalModalVisible: false
        }))
    }

    const updateSubject = (updatedSubject) => {
        // We have arry of subjects
        // One of the subjects has updated
        // Find that index in the array
        // And set it to the new updated subject
        let newSubjects = state.subjects;
        let index = newSubjects.findIndex(subject => subject.id == updatedSubject.id);
        newSubjects[index] = updatedSubject;
        setState(prevState => ({
            ...prevState,
            subjects: newSubjects
        }))
    }

    const AddSubject = (subject) => {
        setState(prevState => ({
            ...prevState,
            subjects: [subject, ...prevState.subjects]
        }))
    }

    const setNewSubjects = (newSubjects) => {
        setState(prevState => ({
            ...prevState,
            subjects: [...newSubjects]
        }))
    }

    const setDeleteSubjects = (id) => {
        let subjects = state.subjects
        let index = subjects.findIndex(subject => subject.id == id)
        subjects.splice(index, 1)
        setState(prevState => ({
            ...prevState,
            subjects
        }))
    }

    return (
        <SubjectContext.Provider value={{
            ...state,
            toggleFetching,
            openAddSubjectModal,
            closeAddSubjectModal,
            openAddYmalModal,
            closeAddYmalModal,
            updateSubject,
            AddSubject,
            setNewSubjects,
            setDeleteSubjects
        }}>
            {props.children}
        </SubjectContext.Provider>
    )
}

// export const SubjectConsumer = SubjectContext.Consumer

export default SubjectContext
