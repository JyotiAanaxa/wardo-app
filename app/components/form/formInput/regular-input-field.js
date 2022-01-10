import { Input, View, Text, Item, Label } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import ErrorContainer from '../error-container';
import { Fonts, Typography, Colors } from '../../../theme';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { AppConstants } from '../../../utils/app-constants';
import SelectPicker from './select-picker';
import SwitchCardField from '../switch-card-field';
import GenderCardField from '../gender-card-field';

const RegularInputField = ({
    inputType,
    formikProps,
    label,
    value,
    items,
    placeholder,
    keyboardType,
    containerStyle,
    ...rest
}) => {
    const inputProp = (inputType) => {
        switch (inputType) {
            case AppConstants.FORM.TEXT:
                return (
                    <Input
                        style={styles.inputContainer}
                        placeholder={placeholder}
                        keyboardType={keyboardType}
                        autoCapitalize="none"
                        autoCompleteType="off"
                        autoCorrect={false}
                        autoFocus={true}
                        onChangeText={formikProps.handleChange(value)}
                        onBlur={formikProps.handleBlur(value)}
                        value={formikProps.values[value]}
                        {...rest}
                    />
                );
            case AppConstants.FORM.GENDER:
                return (
                    <GenderCardField
                        formikProps={formikProps}
                        value={value}
                    />
                );
            case AppConstants.FORM.SWITCH:
                return (
                    <SwitchCardField
                        formikProps={formikProps}
                        value={value}
                    // icon={icon}
                    // primaryText={primaryText}
                    // secondaryText={secondaryText}
                    />
                );
            case AppConstants.FORM.OTP:
                return (
                    <InputOtp
                        formikProps={formikProps}
                        value={value}
                        placeholder={placeholder}
                        resendOTP={props.resendOTP}
                    />
                );
            case AppConstants.FORM.PICKER:
                return (
                    <SelectPicker
                        formikProps={formikProps}
                        value={value}
                        placeholder={placeholder}
                        items={items}
                        containerStyles={styles.inputContainer}
                    />
                );
        }
    }
    return (
        <View style={{ width: '85%' }}>
            <Item stackedLabel style={containerStyle ? containerStyle : styles.container}>
                <Label style={styles.labelStyle}>{label}</Label>
                {inputProp(inputType)}
            </Item>
            {
                formikProps.errors[value] && formikProps.touched[value] && (
                    <ErrorContainer formikProps={formikProps} value={value} />
                )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: Colors.GREY,
        marginVertical: 8,
        alignSelf: 'center'
    },

    inputContainer: {
        width: '100%',
        fontSize: Typography._16,
        fontFamily: Fonts.MEDIUM,
        color: Colors.LABEL
    },

    labelStyle: {
        fontSize: Typography._12,
        color: Colors.SECONDARY_TEXT,
        fontFamily: Fonts.MEDIUM
    },
});

export default RegularInputField;
