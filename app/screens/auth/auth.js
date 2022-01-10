import React, { useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import Bro from 'brototype';
import AuthService from '../../services/auth';


const AuthScreen = () => {
    const navigation = useRef(useNavigation());

    const checkUserOnboardingSteps = async () => {
        const userData = await AuthService.getUser();
        const token = await AuthService.getToken();
        const onBoardingSteps = Bro(userData).iCanHaz('onboardingStep');
        if (token) {
            navigation.current.navigate("SignUp",
                {
                    onBoardingStep: onBoardingSteps || 0,
                    userData: userData
                });
        } else {
            navigation.current.navigate('Auth');
        }
    }

    useEffect(() => {
        checkUserOnboardingSteps()
    }, []);

    return (
        <></>
    )
}

export default AuthScreen;
