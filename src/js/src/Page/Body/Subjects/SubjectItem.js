import React from 'react';

const subjectDivStyle = {
    minWidth: '120px', 
    border: '1px solid black',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    margin: '30px 30px'
}

const removeButtonStyling = {
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
                <button 
                style={removeButtonStyling} 
                onClick={onClick}
                >Remove</button>
            </div>
        </div>
    )
}

export default SubjectItem;
