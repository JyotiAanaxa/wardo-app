import { Input, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Platform } from 'react-native';
import ErrorContainer from '../error-container';
import { Fonts, Typography, Colors } from '../../../theme';

const InputField = ({
    formikProps,
    userObj,
    value,
    placeholder,
    keyboardType,
    countryCode,
    cardContainer,
    textStyle,
    ...rest
}) => {
    const inputValue = () => {
        if (userObj) {
            // formikProps.setFieldValue('name', userObj.name);
            formikProps.setFieldValue(value, userObj[value]);
        }
    }

    useEffect(inputValue, [userObj]);

    return (
        <>
            <View style={{ flexDirection: 'row', width: countryCode ? '94%' : '100%', height: 60, marginBottom: cardContainer ? 0 : 8 }}>
                {countryCode && <View style={[cardContainer ? styles.cardInputStyle : styles.boxInputStyle, { width: '26%', marginRight: 15 }]}>
                    <Input
                        style={cardContainer ? styles.cardInputTextStyle : styles.boxInputTextStyle}
                        placeholder={placeholder}
                        placeholderTextColor={Colors.PLACEHOLDER_TEXT_COLOR}
                        keyboardType={keyboardType}
                        autoCapitalize="none"
                        disabled={true}
                        autoCompleteType="off"
                        autoFocus={false}
                        autoCorrect={false}
                        onChangeText={formikProps.handleChange(value)}
                        onBlur={formikProps.handleBlur(value)}
                        value={'+91'}
                        {...rest}
                    />
                </View>}
                <View style={[cardContainer ? styles.cardInputStyle : styles.boxInputStyle, { width: countryCode ? '74%' : '100%' }]}>
                    <Input
                        style={[cardContainer ? styles.cardInputTextStyle : styles.boxInputTextStyle, textStyle]}
                        placeholder={placeholder}
                        placeholderTextColor={Colors.PLACEHOLDER_TEXT_COLOR}
                        keyboardType={keyboardType}
                        autoCapitalize="none"
                        autoCompleteType="off"
                        autoCorrect={false}
                        autoFocus={true}
                        onChangeText={(text) => {
                            if (value === 'mobileNumber') {
                                if (text.length <= 10) {
                                    formikProps.setFieldValue(value, text)
                                }
                            } else {
                                formikProps.setFieldValue(value, text)
                            }
                        }}
                        // onChangeText={(text) => { formikProps.handleChange(value) }}
                        onBlur={formikProps.handleBlur(value)}
                        value={formikProps.values[value]}
                        {...rest}
                    />
                </View>
            </View >
            {
                formikProps.errors[value] && formikProps.touched[value] && (
                    <ErrorContainer formikProps={formikProps} value={value} />
                )}
        </>
    );
};

const styles = StyleSheet.create({
    boxInputStyle: {
        borderColor: Colors.INPUT_BORDER_COLOR,
        borderWidth: 0.8,
        borderRadius: 20,
        paddingTop: 5,
        paddingLeft: 20,
        paddingRight: 20
    },
    cardInputStyle: {
        borderColor: Colors.INPUT_BORDER_COLOR,
        fontSize: Typography.INPUT_TEXT,
        color: Colors.BLACK,
        fontWeight: 'bold',
        fontWeight: '900',
        fontFamily: Fonts.BOLD
    },
    boxInputTextStyle: {
        fontSize: Typography.INPUT_TEXT,
        color: Colors.BLACK,
        opacity: 0.8,
        fontWeight: '900',
        fontFamily: Fonts.BOLD
    },
    cardInputTextStyle: {
        fontSize: Typography.INPUT_TEXT,
        color: Colors.BLACK,
        fontWeight: '900',
        fontFamily: Fonts.MEDIUM
    },
});

export default InputField;