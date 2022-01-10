import React from 'react';
import ProfileContainer from './profile-container';
import { AppConstants } from '../../../utils/app-constants';
import { styles } from './style';

export const renderPage = (props, formikProps) => {
    switch (props.step) {
        case 0:
            return (
                <ProfileContainer
                    labelLine1={'Which City'}
                    labelLine2={'Do You Live In?'}
                    placeholder={'Eg. New Delhi'}
                    formikProps={formikProps}
                    value={props.valueKey}
                    inputType={AppConstants.PROFILE_FORM.TEXT}
                    props={props}
                />
            );

        case 1:
            return (
                <ProfileContainer
                    labelLine1={'What Services Do'}
                    labelLine2={'You Specialize In?'}
                    formikProps={formikProps}
                    value={props.valueKey}
                    inputType={AppConstants.PROFILE_FORM.CHECK_LIST}
                    items={props.serviceItems}
                    itemStyle={styles.serviceItem}
                    titleStyle={styles.serviceTitle}
                    touchContainer={styles.serviceTouchContainer}
                    numColumns={2}
                    checkboxStyle={styles.serviceCheckboxStyle}
                    props={props}
                />
            );

        case 2:
            return (
                <ProfileContainer
                    labelLine1={'Number of years of'}
                    labelLine2={'Styling Experience?'}
                    formikProps={formikProps}
                    value={props.valueKey}
                    inputType={AppConstants.PROFILE_FORM.EXPERIENCE}
                    items={props.experienceItems}
                    props={props}
                />
            );

        case 3:
            return (
                <ProfileContainer
                    labelLine1={'What type of work'}
                    labelLine2={'Have You Done?'}
                    formikProps={formikProps}
                    value={props.valueKey}
                    inputType={AppConstants.PROFILE_FORM.CHECK_LIST}
                    items={props.workItems}
                    itemStyle={styles.workItem}
                    titleStyle={styles.workTitle}
                    touchContainer={styles.workTouchContainer}
                    numColumns={1}
                    checkboxStyle={styles.workCheckboxStyle}
                    props={props}
                />
            );
    }
};

