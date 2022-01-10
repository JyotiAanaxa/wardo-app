import React from 'react';
import { StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements'
import { Colors, Typography, Fonts } from '../../../theme';

const CheckBoxContainer = ({ label = '', status = false, handleClick = () => { }, containerStyle }) => (
    <CheckBox
        title={label}
        checked={status}
        onPress={handleClick}
        checkedColor={Colors.PRIMARY}
        textStyle={styles.labelText}
        containerStyle={containerStyle ? containerStyle : styles.container}
    />
);

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        borderWidth: 0,
        backgroundColor: Colors.WHITE
    },
    labelText: {
        fontSize: Typography.SMALL,
        fontFamily: Fonts.MEDIUM,
        fontWeight: '400',
        color: Colors.SECONDARY_TEXT,
    }
});

export default CheckBoxContainer;