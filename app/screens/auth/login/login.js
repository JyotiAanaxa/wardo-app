import React, { useEffect, useState } from 'react';
import { BackHandler, StyleSheet, Platform } from 'react-native';
import AuthService, { Subject } from '../../../services/auth';
import { NumberValidation, OtpValidation } from '../../../services/validations';
import { DEFAULT_ERROR_CALLBACK, getFirstName, SHOW_INFO_NOTIFICATION } from '../../../utils/app-util';
import { renderPage } from './login-field';
import { MultiStepForm } from '../../../components/form/multi-step-form';
import DefBackground from '../../../layouts/background';
import { FormHeader } from '../../../components/form/form-header';
import { Fonts, Typography, Colors } from '../../../theme';
import { useNavigation } from '@react-navigation/native';

export const Auth = () => {

    const navigation = useNavigation();
    const initialValues = { mobileNumber: '', otp: '' };
    const schemaArray = [NumberValidation, OtpValidation];
    const TOTAL_PAGE = 1;
    const [step, setStep] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [userName, setUserName] = useState('');
    const [userNumber, setUserNumber] = useState(null);
    const [isExist, setIsExist] = useState(false);

    const previous = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };

    const next = () => {
        if (step < TOTAL_PAGE) {
            setStep(step + 1);
        }
    };

    const handleBackPress = () => {
        if (step > 0) {
            previous();
            return true;
        } else if (step === 0) {
            BackHandler.exitApp();
        } else {
            return false;
        }
    };

    const sendOTP = (data) => {
        AuthService.requestOtp(data).subscribe(
            data => {
                setIsLoading(false);
                setIsExist(data.name ? true : false);
                setUserName(getFirstName(data.name));
                setUserNumber(data.mobileNumber);
                next();
            },
            error => {
                setIsLoading(false);
                if (error) {
                    DEFAULT_ERROR_CALLBACK(error);
                }
            },
        );
    }

    const resendOTP = () => {
        setIsLoading(true);
        let data = { mobileNumber: userNumber }
        AuthService.requestOtp(data).subscribe(
            data => {
                setIsLoading(false);
                SHOW_INFO_NOTIFICATION('OTP sent successfully');
            },
            error => {
                setIsLoading(false);
                if (error) {
                    DEFAULT_ERROR_CALLBACK(error);
                }
            },
        );
    }

    const onSubmit = values => {
        let data = { mobileNumber: values.mobileNumber };
        if (step < TOTAL_PAGE) {
            setIsLoading(true);
            sendOTP(data);
        } else {
            setIsLoading(true);
            AuthService.login(values).subscribe(
                data => {
                    setIsLoading(false);
                    userName ? Subject.next(true) : navigation.navigate('SignUp', { onBoardingStep: 0 })
                },
                error => {
                    setIsLoading(false);
                    if (error) {
                        DEFAULT_ERROR_CALLBACK(error);
                    }
                },
            );
        }
    };

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
        };
    }, [step]);

    return (
        <MultiStepForm
            backgroundLayer={<DefBackground />}
            initialValues={initialValues}
            schemaArray={schemaArray[step]}
            valueKey={Object.keys(initialValues)[step]}
            step={step}
            isLoading={isLoading}
            onSubmit={onSubmit}
            renderPage={renderPage}
            resendOTP={resendOTP}
            isExist={isExist}
            userName={userName}
            navigation={previous}
            formHeader={<FormHeader
                step={step}
                backSubmit={previous}
            />}
            onTermsClick={() => { navigation.navigate('TermsOfUse') }}
            onPrivacyClick={() => { navigation.navigate('PrivacyPolicy') }}
        />
    );
}

const styles = StyleSheet.create({
    txtStyle: {
        fontWeight: 'bold',
        fontFamily: Fonts.BOLD,
        fontSize: Typography.HEADER_TEXT
    }
})

export default Auth;