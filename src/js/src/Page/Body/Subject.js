import React from 'react';
import YmalProduct from './YmalProduct';
import ProductFooter from './ProductFooter';
import {deleteSubject} from '../../client';
import {Popconfirm} from 'antd';

const SubjectWrapper = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

const SubjectProduct = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

const deleteProduct = () => {
    deleteSubject()
}

const wrapperStyling = {
    paddingBottom: '70px',
    display: 'flex',
    flexDirection: 'column',
    margin: '0'
}

const productWrapper ={
    display: 'flex',
    flexDirection: 'row'
}

const subjectDivStyle = {
    width: '120px', 
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

const ymalListing = {
    margin: '0 auto'
}

const Subject = ({subjects, ymalProducts, openAddYmalModal}) => {
    return (
        <SubjectWrapper>
            <div style={wrapperStyling}>
                {subjects.map((subject, index) => {
                    const {id, name, designer, colour, category} = subject
                    return (
                        <SubjectProduct 
                            id={id} 
                            name={name} 
                            designer={designer} 
                            colour={colour} 
                            category={category} 
                        >
                            <div style={listingInfo}>
                                <div style={{margin: '30px 0 0 30px'}}>
                                    <h3 style={{textAlign: 'left', fontWeight: 'bold', margin: 0}}>{designer}</h3>
                                    <p style={productDetails}>{name}  |   {id}</p>
                                    <p style={productDetails}>{colour}  |  {category}</p>
                                </div>
                                <div style={{margin: '72px 30px 0 0'}}>
                                    <p style={ymalCount}>
                                        Items currently in queue: 
                                    </p>
                                </div>
                            </div>
                            <div style={productWrapper}>
                                <div key={subject.id} style={subjectDivStyle}>
                                    <div style={textWrapper}>
                                        <p style={paragraphStyle}>{id}</p>
                                        <p style={paragraphStyle}>{name}</p>
                                        <p style={paragraphStyle}>{designer}</p>
                                        <p style={paragraphStyle}>{colour}</p>
                                        <p style={paragraphStyle}>{category}</p>
                                    </div>
                                    <div>
                                        <button style={removeButtonStyling} onClick={deleteProduct}>Remove</button>
                                    </div>
                                </div>
                                <div style={ymalListing}>
                                    <YmalProduct ymalProducts={ymalProducts} />
                                </div>
                            </div>
                            <ProductFooter />
                        </SubjectProduct>
                    ) 
                } )} 
            </div>
        </SubjectWrapper>
    )
}
export default Subject;