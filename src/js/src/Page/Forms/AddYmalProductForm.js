import React from 'react';
import {Formik} from 'formik';
import {Input, Tag} from 'antd';
import {addNewYmalProduct} from '../../client';
import { notification } from 'antd';

const inputSytling = {
    marginBottom: '15px'
}

const tagStyling = {
    backgroundColor: 'white',
    fontStyle: 'italic',
    color: 'red',
    marginBottom: '10px'
}

const submitButtonStyling = {
    marginRight: '30px', 
    width: '120px', 
    height: '30px', 
    backgroundColor: 'black', 
    fontSize: '10px', 
    fontWeight: 'bold', 
    color: 'white'
}

const AddYmalProductForm = ({subjectId, onSuccess, onFailure}) => {

    const openNotificationWithIcon = (type, message, description) => notification[type]({message, description})

    return (
        <div>
            {/* <h1>Anywhere in your app!</h1> */}
            <Formik
                initialValues={{ subjectId: '', id: '', name: '', designer: '', colour: '', category: '' }}
                validate={values => {
                    let errors = {};

                    if (!values.subjectId) {
                        errors.subjectId = 'Key Product ID Required';
                    }

                    if (!values.id) {
                        errors.id = 'Product ID Required';
                    }
                    
                    if (!values.name) {
                        errors.name = 'Product Name Required';
                    }

                    if (!values.designer) {
                        errors.designer = 'Designer Required';
                    }

                    if (!values.colour) {
                        errors.colour = 'Colour Required';
                    }

                    if (!values.category) {
                        errors.category = 'Product Category Required';
                    }
                    return errors;
                }}
                onSubmit={(ymalProduct, { setSubmitting, resetForm }) => {
                    addNewYmalProduct(ymalProduct, subjectId).then(() => {
                        onSuccess();
                        openNotificationWithIcon('success', 'Product added', `YMAL Product ${ymalProduct.id} was added`);
                    })
                    .catch(error => {
                        onFailure(error);
                    })
                    .finally(() => {
                        setSubmitting(false);
                        resetForm();
                    })
                }}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    submitForm,
                    isValid
                    /* and other goodies */
                }) => (
                    <form 
                    onSubmit={handleSubmit}
                    >
                    <Input
                        style={inputSytling}
                        name="subjectId"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.subjectId}
                        placeholder='Key Product ID eg. 12345'
                    />
                    {errors.subjectId && touched.subjectId && <Tag style={tagStyling}>{errors.subjectId}</Tag>}
                    <Input
                        style={inputSytling}
                        name="id"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.id}
                        placeholder='Product ID eg. 12345'
                    />
                    {errors.id && touched.id && <Tag style={tagStyling}>{errors.id}</Tag>}
                    <Input
                        style={inputSytling}
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        placeholder='Product Name eg. Evening Dress'
                    />
                    {errors.name && touched.name && <Tag style={tagStyling}>{errors.name}</Tag>}
                    <Input
                        style={inputSytling}
                        name="designer"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.designer}
                        placeholder='Designer eg. Balenciaga'
                    />
                    {errors.designer && touched.designer && <Tag style={tagStyling}>{errors.designer}</Tag>}
                    <Input
                        style={inputSytling}
                        name="colour"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.colour}
                        placeholder='Colour eg. White'
                    />
                    {errors.colour && touched.colour && <Tag style={tagStyling}>{errors.colour}</Tag>}
                    <Input
                        style={inputSytling}
                        name="category"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.category}
                        placeholder='Product Category eg. Dresses'
                    />
                    {errors.category && touched.category && <Tag style={tagStyling}>{errors.category}</Tag>}
                    <button onClick={() => submitForm()} style={submitButtonStyling} type="submit" disabled={isSubmitting || (touched && !isValid)}>
                        Submit
                    </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default AddYmalProductForm;
