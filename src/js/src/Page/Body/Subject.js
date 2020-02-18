import React from 'react';
import YmalProduct from './YmalProduct';

// const SubjectWrapper = (props) => {
//     return (
//         <div>
//             {props.children}
//         </div>
//     )
// }

const subjectDivStyle = {
    width: '120px', 
    border: '1px solid black', 
    margin: '30px 0 30px 30px'
}

const paragraphStyle = {
    margin: '0', 
    fontSize: '11px'
}

const textWrapper = {
    display: 'block', 
    textAlign: 'center', 
    padding: '20px 10px'
}

const productDetails = {
    fontSize: '12px', 
    fontWeight: 'bold', 
    color: 'black', 
    margin: 0
}

const ymalCount = {
    fontSize: '12px', 
    color: 'black', 
}

const bottomBanner = {
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: '#dedede', 
    height: '60px'
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

const Subject = ({subjects, ymalProducts}) => {
    return (
        // <SubjectWrapper>
            <div>
                {subjects.map((subject, index) => {
                    const {id, name, designer, colour, category} = subject
                    return (
                        <Subject id={id} name={name} designer={designer} colour={colour} category={category}>
                            <div>
                                <div style={{margin: '30px 0 0 30px'}}>
                                    <h3 style={{fontWeight: 'bold', margin: 0}}>{designer}</h3>
                                    <p style={productDetails}>{name}  |   {id}</p>
                                    <p style={productDetails}>{colour}  |  {category}</p>
                                </div>
                                <div style={{margin: '30px 0 0 30px'}}>
                                    <p style={ymalCount}>Items currently in queue:</p>
                                </div>
                            </div>
                            <div key={index} style={subjectDivStyle}>
                                <div style={textWrapper}>
                                    <p style={paragraphStyle}>{id}</p>
                                    <p style={paragraphStyle}>{name}</p>
                                    <p style={paragraphStyle}>{designer}</p>
                                    <p style={paragraphStyle}>{colour}</p>
                                    <p style={paragraphStyle}>{category}</p>
                                </div>
                            </div>
                            <div>
                                <YmalProduct ymalProducts={ymalProducts} />
                            </div>
                            <div style={bottomBanner}>
                                <button style={ymalButtonStyling}>Add YMAL Products</button>
                                <button style={saveButtonStyling}>Save</button>
                            </div>
                        </Subject>
                    ) 
                } )} 
            </div>
        // </SubjectWrapper>
    )
}
export default Subject;