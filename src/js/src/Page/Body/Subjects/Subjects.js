import React from 'react';
import SubjectItem from './SubjectItem';
import SubjectFooter from './SubjectFooter';
import { deleteSubject } from '../../../client';
import Carousel from '../Carousel/Carousel';
import { notification } from 'antd';
import SubjectContext from '../../../SubjectContext';

const wrapperStyling = {
    paddingBottom: '70px',
    display: 'flex',
    flexDirection: 'column',
    margin: '0'
}

const productWrapper = {
    display: 'flex',
    flexDirection: 'row'
}

const listingInfo = {
    display: 'flex',
    justifyContent: 'space-between'
}

const productDetails = {
    textAlign: 'left',
    fontSize: '12px',
    fontWeight: 'bold',
    color: 'black',
    margin: 0
}

const ymalCount = {
    textAlign: 'left',
    fontSize: '13px',
    color: 'black',
    margin: 0
}

const countStyle = {
    fontWeight: 'bold',
    fontSize: '14px'
}

const Subjects = () => {

    const { subjects, updateSubject, setDeleteSubjects } = React.useContext(SubjectContext)
    const openNotificationWithIcon = (type, message, description) => notification[type]({ message, description })

    const deleteSubjectProduct = (id) => {
        deleteSubject(id).then(() => {
            openNotificationWithIcon('success', 'Product deleted', `Subject ${id} was deleted`);
            setDeleteSubjects(id);
        }).catch(error => {
            openNotificationWithIcon('error', 'error', `(${error.error.message} ${error.error.httpStatus}`)
        });
    }

    const updateYmalProductList = (updatedYmalProductList, subjectId) => {
        // Create the new subject with the updated product list
        let newSubject = subjects.find(subject => subject.id = subjectId);
        newSubject.ymalProductList = updatedYmalProductList;
        updateSubject(newSubject);
    }

    return (
        <div style={wrapperStyling}>
            {subjects.map((subject, index) => {
                const { id, name, designer, colour, category, ymalProductList } = subject
                const ymalProducts = subject.ymalProductList
                const ymalProduct = ymalProducts[index];
                const numberOfYmals = ymalProducts.length
                return (
                    <div>
                        <div style={listingInfo}>
                            <div style={{ margin: '20px 0 0 20px' }}>
                                <h3 style={{ textAlign: 'left', fontWeight: 'bold', margin: 0 }}>{designer}</h3>
                                <p style={productDetails}>{name}  |   {id}</p>
                                <p style={productDetails}>{colour}  |  {category}</p>
                            </div>
                            <div style={{ margin: '72px 30px 0 0' }}>
                                <p style={ymalCount}>
                                    Items currently in queue: {numberOfYmals !== undefined ? <span style={countStyle}>{numberOfYmals} / 16</span> : null}
                                </p>
                            </div>
                        </div>
                        <div style={productWrapper}>
                            <SubjectItem
                                subject={subject}
                                onClick={() => deleteSubjectProduct(id)}
                                id={id}
                            />
                            <div>
                                <Carousel ymalProducts={ymalProductList} />
                            </div>
                        </div>
                        <SubjectFooter
                            subjectId={id}
                            ymalProducts={ymalProductList}
                            ymalProduct={ymalProduct}
                            updateYmalProductList={updateYmalProductList}
                        />
                    </div>
                )
            })}

        </div>
    )
}
export default Subjects;