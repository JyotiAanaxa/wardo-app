import React, { useEffect } from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';
import { Picker } from 'native-base';
import { Colors, Typography, Fonts } from '../../../theme';
import ErrorContainer from '../error-container';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const SelectPicker = ({
    formikProps,
    value,
    userObj,
    placeholder,
    containerStyles,
    items,
    pickerBottomText }) => {


    const ageValue = () => {
        if (userObj && userObj.ageRange) {
            formikProps.setFieldValue('ageRange', userObj.ageRange);
        }
    }

    useEffect(ageValue, []);

    return (
        <>
            <TouchableHighlight style={containerStyles ? containerStyles : styles.container}>
                <Picker
                    mode='dropdown'
                    selectedValue={formikProps.values[value]}
                    onValueChange={(val) => formikProps.setFieldValue(value, val)}
                    placeholder={placeholder}
                    style={styles.itemStyle}
                >
                    {items.map((item, index) => <Picker.Item label={item.value} value={item.key} key={index} />)}
                </Picker>
            </TouchableHighlight>
            {
                formikProps.errors[value] && formikProps.touched[value] && (
                    <ErrorContainer formikProps={formikProps} value={value} />
                )}
            {pickerBottomText && <Text style={styles.pickerBottomText}>{pickerBottomText}</Text>}
        </>
    )
};

const styles = StyleSheet.create({

    container: {
        borderWidth: 0.6,
        borderColor: Colors.INPUT_BORDER_COLOR,
        width: '100%',
        borderRadius: 20,
        paddingHorizontal: 10,
        marginBottom: 5
    },
    itemStyle: {
        fontSize: Typography.TINY,
        fontFamily: Fonts.REGULAR,
        color: Colors.SECONDARY_TEXT,
    },
    pickerBottomText: {
        fontSize: Typography.SMALL,
        color: '#B0B0B0',
        lineHeight: heightPercentageToDP('2.1%'),
        fontFamily: Fonts.MEDIUM,
        margin: 8
    }
});

export default SelectPicker;