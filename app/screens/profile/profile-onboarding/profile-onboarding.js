import React, { useEffect, useState } from 'react';
import { BackHandler, StyleSheet } from 'react-native';
import { FormHeader } from '../../../components/form/form-header';
import { MultiStepForm } from '../../../components/form/multi-step-form';
import AuthService from '../../../services/auth';
import { Colors, Fonts, Typography } from '../../../theme';
import { SafeAreaContainer } from '../../../utils/app-container';
import { DEFAULT_ERROR_CALLBACK, convertIntoFlatListObj, toTitleCase, transformToCapitalize } from '../../../utils/app-util';
import { renderPage } from './profile-field';
import { CityValidation, ServiceValidation, ExperienceValidation, WorkValidation } from '../../../services/validations';

export const ProfileOnboarding = ({ route, navigation }) => {

    const { stylistOnboardingStep } = route.params;
    const initialValues = { city: '', specialities: '', experienceRange: '', typesOfworkDone: '' };
    const schemaArray = [CityValidation, ServiceValidation, ExperienceValidation, WorkValidation];
    const TOTAL_PAGE = 3;
    const [step, setStep] = useState(stylistOnboardingStep);
    const [isLoading, setIsLoading] = useState(false);
    const [userObj, setUserObj] = useState({});
    const [configObj, setConfigObj] = useState({});

    const getUserInfo = async () => {
        const userInfo = await AuthService.getUser();
        setUserObj(userInfo);
    }
    const getConfig = async () => {
        const configObj = await AuthService.getConfig();
        setConfigObj(configObj);
    }

    const workItems = [
        {
            key: 'Commercials',
            value: 'Commercials'
        },
        {
            key: 'Music Video',
            value: 'Music Video'
        },
        {
            key: 'Movies',
            value: 'Movies'
        },
        {
            key: 'Photoshoots',
            value: 'Photoshoots'
        },
        {
            key: 'Editorials',
            value: 'Editorials'
        }
    ];

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
        }
        else {
            navigation.goBack();
        }
    };

    const updateUserObj = (key, obj) => {
        AuthService.patchUpdate(key, obj).subscribe(
            async (data) => {
                setIsLoading(false);
                const onBoardingStep = await data.stylistInfo.onboardingStep;
                if (onBoardingStep === 4) {
                    navigation.navigate('ProfileAllSet');
                }
                else {
                    next();
                }
            },
            error => {
                DEFAULT_ERROR_CALLBACK(error);
            });
    };

    const onSubmit = values => {
        setIsLoading(true);
        switch (step) {
            case 0:
                userObj.stylistInfo.city = transformToCapitalize(values.city);
                updateUserObj('stylistInfo.city', userObj);
                break;
            case 1:
                userObj.stylistInfo.specialities = values.specialities;
                updateUserObj('stylistInfo.specialities', userObj);
                break;
            case 2:
                userObj.stylistInfo.experienceRange = values.experienceRange;
                updateUserObj('stylistInfo.experienceRange', userObj);
                break;
            case 3:
                userObj.stylistInfo.typesOfworkDone = values.typesOfworkDone;
                updateUserObj('stylistInfo.typesOfworkDone', userObj);
                break;
        }
    };

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
        };
    }, [step]);

    useEffect(() => {
        getUserInfo();
        getConfig();
    }, []);

    return (
        <SafeAreaContainer style={{ backgroundColor: Colors.WHITE }}>
            <MultiStepForm
                initialValues={initialValues}
                schemaArray={schemaArray[step]}
                valueKey={Object.keys(initialValues)[step]}
                step={step}
                currentStep={step + 1}
                progress={(step / TOTAL_PAGE)}
                totalStep={TOTAL_PAGE + 1}
                isLoading={isLoading}
                onSubmit={onSubmit}
                renderPage={renderPage}
                userObj={userObj.stylistInfo}
                navigation={previous}
                formHeader={<FormHeader
                    step={step}
                    backSubmit={handleBackPress}
                    isFirstNavigationShow
                />}
                formSteps
                experienceItems={configObj.experienceRanges}
                serviceItems={convertIntoFlatListObj(configObj.stylistSpecialies)}
                workItems={convertIntoFlatListObj(configObj.typesOfWork)}
            />
        </SafeAreaContainer>
    );
}

const styles = StyleSheet.create({
    txtStyle: {
        fontWeight: 'bold',
        fontFamily: Fonts.BOLD,
        fontSize: Typography.HEADER_TEXT
    }
})

export default ProfileOnboarding;