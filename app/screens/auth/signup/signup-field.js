import React from 'react';
import InputContainer from '../../../components/form/input-container';
import LeafIcon from '../../../icons/leaf';
import { AppConstants } from '../../../utils/app-constants';
import { t } from '../../../utils/i18n';

export const renderPage = (props, formikProps) => {
    switch (props.step) {
        case 0:
            return (
                <InputContainer
                    labelLine1={'' + t('what.key')}
                    labelLine2={'' + t('form.fullname.placeholder')}
                    formikProps={formikProps}
                    value={props.valueKey}
                    placeholder={'' + t('form.fullname.placeholder')}
                    keyboardType={'default'}
                    inputType={AppConstants.FORM.TEXT}
                    formSteps
                    props={props}
                />
            );
        case 1:
            return (
                <InputContainer
                    labelLine1={'' + t('select.key')}
                    labelLine2={'' + t('gender.key')}
                    formikProps={formikProps}
                    value={props.valueKey}
                    inputType={AppConstants.FORM.GENDER}
                    items={props.genderData}
                    props={props}
                />
            );
        case 2:
            return (
                <InputContainer
                    labelLine1={'' + t('switch.label.one')}
                    labelLine2={'' + t('switch.label.two')}
                    formikProps={formikProps}
                    value={props.valueKey}
                    primaryText={'' + t('switch.label.primary')}
                    secondaryText={'' + t('switch.label.secondary')}
                    icon={<LeafIcon />}
                    inputType={AppConstants.FORM.SWITCH}
                    props={props}
                />
            );
        case 3:
            return (
                <InputContainer
                    labelLine1={'' + t('what.key')}
                    labelLine2={'' + t('age.key')}
                    formikProps={formikProps}
                    value={props.valueKey}
                    placeholder={'' + t('form.age.placeholder')}
                    inputType={AppConstants.FORM.PICKER}
                    progressLabel={'Start Adding Items'}
                    pickerBottomText={'This will help us curate the essential items in your wardrobe'}
                    items={props.ageData}
                    props={props}
                />
            );
        case 4:
            return (
                <InputContainer
                    labelLine1={'' + t('select.key')}
                    labelLine2={'' + t('clothing.key')}
                    bottomLabel={'' + t('clothing.label.key')}
                    formikProps={formikProps}
                    value={props.valueKey}
                    inputType={AppConstants.FORM.CLOTHING_PREFERENCES}
                    items={props.clothingPreferences}
                    props={props}
                />
            );

    }
};

