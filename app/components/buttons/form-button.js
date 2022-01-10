import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Fonts, Typography } from '../../theme';
import ThemeButton from './theme-button';

const FormButton = ({ icon, onSubmit, isLoading, disabled, btnText, formSteps, btnStyle }) => {
    return (
        <View style={[styles.btnContainer, btnStyle, { justifyContent: btnText || formSteps ? 'space-between' : 'flex-end' }]}>
            <View>
                {btnText && <Text style={styles.txtStyle}>{btnText}</Text>}
                {formSteps}
            </View>
            <ThemeButton
                icon={icon}
                onSubmit={onSubmit}
                isLoading={isLoading}
                disabled={disabled}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    btnContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    txtStyle: {
        fontSize: Typography._22,
        fontFamily: Fonts.BOLD,
        alignSelf: 'flex-start'
    }
});

export default FormButton;
