import React from 'react';
import { FormContainer, KeyboardViewContainer } from '../../utils/app-container';
import { Formik } from 'formik';


export const MultiStepForm = (props) => {
    return (
        <FormContainer
            navigation={props.navigation}
            backgroundLayer={props.backgroundLayer}
            formHeader={props.formHeader}>
            <Formik
                initialValues={props.initialValues}
                validationSchema={props.schemaArray}
                onSubmit={values => {
                    props.onSubmit(values);
                }}>
                {formikProps => (
                    <KeyboardViewContainer>
                        {props.renderPage(props, formikProps)}
                    </KeyboardViewContainer>
                )}
            </Formik>
        </FormContainer>
    );
}