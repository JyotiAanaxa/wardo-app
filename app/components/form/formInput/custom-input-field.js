import { Input, Label } from 'native-base';
import { View, Text } from 'react-native';
import React from 'react';
import ErrorContainer from '../error-container';

const CustomInputField = ({
    formikProps,
    value,
    placeholder,
    placeholderTextColor,
    keyboardType,
    inputContainer,
    label,
    show,
    requiredLabel,
    labelStyle,
    ...rest
}) => {

    return (
        <View style={{ width: '100%', height: show ? formikProps.errors[value] && formikProps.touched[value] ? 108 : 85 : 85, marginBottom: 18 }}>
            {label && <Label style={labelStyle}>{label} {requiredLabel && <Text style={{ color: '#EF709D' }}>{requiredLabel}</Text>}</Label>}
            <Input
                style={inputContainer}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                keyboardType={keyboardType}
                autoCapitalize="none"
                autoCompleteType="off"
                autoCorrect={false}
                autoFocus={false}
                onChangeText={formikProps.handleChange(value)}
                onBlur={formikProps.handleBlur(value)}
                value={formikProps.values[value]}
                {...rest}
            />
            {
                show ? formikProps.errors[value] && formikProps.touched[value] && <ErrorContainer formikProps={formikProps} value={value} style={{ marginTop: 5, marginLeft: 4 }} /> : <></>
            }
        </View>
    );
};

export default CustomInputField;