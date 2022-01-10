import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Loader} from '../../components/loader/loader';
import AuthService from '../../services/auth';
import {FlexContainer} from '../../utils/app-container';
import {Colors} from '../../theme';
import {
  HomeNavigator,
  AuthStackNavigator,
} from '../../navigation/stack-navigation';
import {Subject} from '../../services/auth.js';
import SplashScreen from 'react-native-splash-screen';
import Bro from 'brototype';
import {DEFAULT_ERROR_CALLBACK} from '../../utils/app-util';
import {AppConstants} from '../../utils/app-constants';

export const Entry = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasToken, setHasToken] = useState(false);
  const [currentUserRole, setCurrentUserRole] = useState(
    AppConstants.ROLE.CONSUMER,
  );

  const fetchConfig = () => {
    AuthService.config().subscribe(
      async config => {},
      err => {
        if (err && err.response) {
          DEFAULT_ERROR_CALLBACK(err);
        }
      },
    );
  };

  const onFailureCall = () => {
    setHasToken(false);
    setIsLoading(false);
    SplashScreen.hide();
  };

  const isAuthenticated = () => {
    setIsLoading(true);
    setTimeout(async () => {
      const userData = await AuthService.getUser();
      const onBoardingSteps = Bro(userData).iCanHaz('onboardingStep');
      if (onBoardingSteps && onBoardingSteps === 5) {
        const token = await AuthService.getToken();
        AuthService.validateToken(token).subscribe(
          async resp => {
            const userData = await resp;
            setHasToken(true);
            setIsLoading(false);
            AuthService.setUser(userData);
            AuthService.setUserRole(userData.currentRole);
            SplashScreen.hide();
          },
          () => onFailureCall(),
        );
      } else {
        onFailureCall();
      }
    }, 1500);
  };

  const subjectSubscribe = () => {
    Subject.subscribe(() => {
      isAuthenticated();
    });
    return () => {};
  };

  useEffect(() => {
    subjectSubscribe();
  }, [Subject]);
  useEffect(() => {
    fetchConfig();
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? (
        <FlexContainer>
          <Loader color={Colors.PRIMARY} size={40} />
        </FlexContainer>
      ) : hasToken ? (
        <HomeNavigator />
      ) : (
        <AuthStackNavigator />
      )}
    </NavigationContainer>
  );
};

export default Entry;
