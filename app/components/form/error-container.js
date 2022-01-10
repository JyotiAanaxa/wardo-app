import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import ErrorIcon from '../../icons/error';
import { Fonts, Typography, Colors } from '../../theme';

const ErrorContainer = ({ formikProps, value, style }) => {
    return (
        <View style={[styles.container, style]}>
            <ErrorIcon />
            <Text style={styles.errorLabels}>{formikProps.errors[value]}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    errorLabels: {
        fontSize: Typography.SMALL,
        marginLeft: 5,
        marginTop: -3,
        color: Colors.DANGER,
        opacity: 0.9,
        fontFamily: Fonts.MEDIUM,
    },
});

export default ErrorContainer;