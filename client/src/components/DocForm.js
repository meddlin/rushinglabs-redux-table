import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled,  { css } from 'styled-components';
import { withFormik, Form } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { store } from '../_helpers/store';
import { tableActions } from '../table/actions';

const FormStyle = styled.div`
    display: flex;
    flex-direction: column;
`;

const DocForm = (props) => {
    const {
        values,
        touched,
        errors,
        dirty,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        isSubmitting,
    } = props;
    let history = useHistory();

    useEffect(() => {
        console.log('DocForm loaded');
    }, []);

    return (
        <FormStyle>
            <Form>
                <label>Name</label>
                <input 
                    name="name"
                    label="Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                />
                {(touched.name && errors.name) ? <div>{errors.name}</div> : ""}

                <label>Active</label>
                <input 
                    type="checkbox"
                    name="active"
                    label="Active"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.active}
                />
                {(touched.active && errors.active) ? <div>{errors.active}</div> : ""}

                <label>Date Created/Hired</label>
                <input 
                    type="date"
                    name="dateCreated"
                    label="Date Created"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dateCreated}
                />
                {(touched.dateCreated && errors.dateCreated) ? <div>{errors.dateCreated}</div> : ""}
            </Form>

            <button type="submit">Create</button>
            <button onClick={handleReset}>Cancel</button>

            <button onClick={() => history.goBack()}>Back to Table</button>
        </FormStyle>
    );
};

const formikEnhancer = withFormik({
    mapPropsToValues: ({ name }) => {
        return {
            name: name || ''
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name is required')
    }),
    handleSubmit: (values, { props, setSubmitting }) => {
        let userDocument = {
            name: values.name || ''
        };

        // store.dispatch(tableActions.createUser(userDocument));
        setSubmitting(false);
    }
})(DocForm);

function mapStateToProps(state) {
    const { table } = state;
    return { };
}

const DocFormConnection = connect(mapStateToProps)(formikEnhancer);
export { DocFormConnection as DocForm };