import React from 'react';
import { Popconfirm } from 'antd';
import './SubjectItemStyles.scss';

const subjectDivStyle = {
    minWidth: '120px', 
    border: '1px solid black',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    margin: '30px 30px'
}

const deleteButtonStyling = {
    width: '70px', 
    height: '15px', 
    backgroundColor: 'white',
    border: '1px solid white', 
    fontSize: '10px', 
    textDecoration: 'underline',
    color: 'black',
    marginBottom: '10px'
}

const paragraphStyle = {
    margin: '0', 
    fontSize: '11px'
}

const textWrapper = {
    display: 'block', 
    textAlign: 'center', 
    padding: '10px 10px 5px'
}

const SubjectItem = ({subject, onClick}) => {
    const {id, name, designer, colour, category} = subject

    return(
        <div key={subject.id} style={subjectDivStyle}>
            <div style={textWrapper}>
                <p style={paragraphStyle}>{id}</p>
                <p style={paragraphStyle}>{name}</p>
                <p style={paragraphStyle}>{designer}</p>
                <p style={paragraphStyle}>{colour}</p>
                <p style={paragraphStyle}>{category}</p>
            </div>
            <div>
                <Popconfirm 
                placement='top'
                title={`Are you sure you want to delete ${id} ?`}
                onConfirm={onClick} 
                onCancel={e => e.stopPropagation()}
                okText="Yes" 
                cancelText="No">
                    <button style={deleteButtonStyling} type='danger' onClick={(e) => e.stopPropagation()}>Delete</button>
                </Popconfirm>
            </div>
        </div>
    )
}

export default SubjectItem;
