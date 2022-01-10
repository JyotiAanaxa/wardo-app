import React, { useEffect, useState } from 'react';
import { BackHandler, Platform } from 'react-native';
import { NameValidation, GenderValidation, EcoValidation, AgeValidation, ClothingValidation } from '../../../services/validations';
import { renderPage } from './signup-field';
import AuthService, { Subject } from '../../../services/auth';
import { MultiStepForm } from '../../../components/form/multi-step-form';
import DefBackground from '../../../layouts/background';
import { FormHeader } from '../../../components/form/form-header';
import { DEFAULT_ERROR_CALLBACK } from '../../../utils/app-util';

export const SignUp = ({ route, navigation }) => {

    const { onBoardingStep, userData } = route.params;
    const TOTAL_PAGE = 4;
    const TOTAL_STEP = TOTAL_PAGE;
    const [step, setStep] = useState(onBoardingStep);
    const [isLoading, setIsLoading] = useState(false);
    const schemaArray = [NameValidation, GenderValidation, EcoValidation, AgeValidation, ClothingValidation];
    const [userDataObj, setUserDataObj] = useState(userData);
    const [config, setConfig] = useState([]);
    const [initialValues, setInitialValues] = useState(null);

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

    const getConfig = async () => {
        const config = await AuthService.getConfig();
        setConfig(config);
        setInitialValues({
            name: '',
            gender: '',
            ecoFriendlyOpted: false,
            ageRange: Platform.OS === 'ios' ? '' : config.ageRanges[0].key,
            clothingPreference: ''
        });
    }

    const setUserData = async () => {
        const userData = await AuthService.getUser();
        setUserDataObj(userData);
    }

    useEffect(() => { setUserData(); }, []);
    useEffect(() => { getConfig(); }, []);

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
        };
    }, [step]);

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

    const updateUserObj = (key, obj) => {
        AuthService.patchUpdate(key, obj).subscribe(
            async (data) => {
                setIsLoading(false);
                const onBoardingStep = await data.onboardingStep;
                if (onBoardingStep === 5) {
                    Subject.next(true);
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
                userDataObj.name = values.name;
                updateUserObj('name', userDataObj);
                break;
            case 1:
                userDataObj.gender = values.gender;
                updateUserObj('gender', userDataObj);
                break;
            case 2:
                userDataObj.ecoFriendlyOpted = values.ecoFriendlyOpted;
                updateUserObj('ecoFriendlyOpted', userDataObj);
                break;
            case 3:
                userDataObj.ageRange = values.ageRange;
                updateUserObj('ageRange', userDataObj);
                break;
            case 4:
                userDataObj.clothingPreference = values.clothingPreference;
                updateUserObj('clothingPreference', userDataObj);
                break;
        }
    };

    return (
        initialValues ? <MultiStepForm
            backgroundLayer={<DefBackground />}
            initialValues={initialValues}
            schemaArray={schemaArray[step]}
            valueKey={Object.keys(initialValues)[step]}
            step={step}
            currentStep={step + 1}
            progress={(step / TOTAL_STEP)}
            totalStep={TOTAL_PAGE + 1}
            isLoading={isLoading}
            onSubmit={onSubmit}
            renderPage={renderPage}
            formHeader={<FormHeader
                step={step}
                backSubmit={previous}
            />}
            ageData={config.ageRanges}
            genderData={config.genders}
            userData={userDataObj}
            clothingPreferences={config.clothingPreferences}
            cardContainer
            formSteps
        /> : <></>
    );
}

export default SignUp;