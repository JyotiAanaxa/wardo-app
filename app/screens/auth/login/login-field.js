import React from 'react';
import { t } from '../../../utils/i18n';
import InputContainer from '../../../components/form/input-container.js';
import { AppConstants } from '../../../utils/app-constants';
import { View, Text } from 'react-native';
import { styles } from './styles';

export const renderPage = (props, formikProps) => {

    const bottomComponent = <View style={{ marginTop: 30 }}>
        <Text style={styles.bottomContainer}>
            By signing up, you confirm that you agree to our
            <Text style={styles.linkTxtStyle} onPress={props.onTermsClick}> Terms of Use </Text>
            and have read/understood our
            <Text style={styles.linkTxtStyle} onPress={props.onPrivacyClick}> Privacy Policy.</Text></Text>
    </View>

    switch (props.step) {
        case 0:
            return (
                <InputContainer
                    labelLine1={'' + t('mobilenumber.label.one')}
                    labelLine2={'' + t('mobilenumber.label.two')}
                    formikProps={formikProps}
                    value={props.valueKey}
                    keyboardType={'number-pad'}
                    placeholder={'' + t('form.mobilenumber.placeholder')}
                    label={'' + t('form.mobilenumber.placeholder')}
                    btnText={'' + t('form.getotp.placeholder')}
                    inputType={AppConstants.FORM.TEXT}
                    countryCode
                    props={props}
                    bottomComponent={bottomComponent}
                />
            );
        case 1:
            return (
                <InputContainer
                    labelLine1={props.isExist ? `${t('welcome.key')}\n${props.userName}!` : '' + t('phone.verification.key')}
                    labelLine2={`${t('form.otp.label')}${formikProps.values['mobileNumber']}`}
                    formikProps={formikProps}
                    value={props.valueKey}
                    inputType={AppConstants.FORM.OTP}
                    keyboardType="number-pad"
                    btnText={props.isExist ? '' + t('login.key') : '' + t('signup.key')}
                    props={props}
                />
            );
    }
};

