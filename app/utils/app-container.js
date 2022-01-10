import React from 'react';
import { View, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { Colors, Mixins } from '../theme';
import { DISMISS_KEYBOARD } from './app-util';

export const SafeAreaContainer = (props) => {
    return <SafeAreaView
        style={[{
            flex: 1,
            width: '100%',
            backgroundColor: Colors.WHITE,
            padding: props.padding || 0
        }, props.style]}>{props.children}</SafeAreaView>;
}

export const FlexContainer = (props) => {
    return <View style={[Mixins.FLEX, props.style]}>
        {props.children}
    </View>;
}

export const KeyboardViewContainer = (props) => {
    return <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={[Mixins.FLEX, props.style]}>{props.children}</KeyboardAvoidingView>
};

export const FormContainer = (props) => {
    return <SafeAreaContainer style={props.safeAreaStyle}>
        {props.backgroundLayer}
        {props.formHeader}
        <FlexContainer style={props.flexStyle}>
            <TouchableWithoutFeedback onPress={DISMISS_KEYBOARD}>
                <FlexContainer style={props.flexViewStyle}>{props.children}</FlexContainer>
            </TouchableWithoutFeedback>
        </FlexContainer>
    </SafeAreaContainer>
}