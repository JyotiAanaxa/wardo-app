import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/home/home';
import Auth from '../screens/auth/login/login';
import SignUp from '../screens/auth/signup/signup';
import TermsConditions from '../screens/auth/login/terms-condition';
import PrivacyPolicy from '../screens/auth/login/privacy-policy';
import IntroScreen from '../screens/intro-screens/intro-screen';
import GetStarted from '../screens/get-started/get-started';
import AuthScreen from '../screens/auth/auth';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const IntroStack = createStackNavigator();
export const AuthStackNavigator = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='Main'
            mode='modal'>
            <AuthStack.Screen name="Main" component={AuthNavigator} />
            <AuthStack.Screen name="TermsOfUse" component={TermsConditions} />
            <AuthStack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
            {/* add full screen appear as modal */}
        </AuthStack.Navigator>
    );
}

export const AuthNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="IntroScreen" component={IntroScreen} />
            <Stack.Screen name="GetStarted" component={GetStarted} />
            <Stack.Screen name="AuthScreen" component={AuthScreen} />
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
};

export const IntroStackNavigator = () => {
    return (
        <IntroStack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='IntroScreen'>
            <IntroStack.Screen name="IntroScreen" component={IntroScreen} />
            <IntroStack.Screen name="GetStarted" component={GetStarted} />
        </IntroStack.Navigator>
    );
}

export const HomeNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}
