import { Button } from 'native-base';
import { StyleSheet, Text, Platform } from 'react-native';
import React from 'react';
import { Colors } from '../../theme';
import { Loader } from '../loader/loader';
import { Fonts } from '../../theme/fonts';

const ThemeButton = (
    { icon, iconText, onSubmit, isLoading, buttonStyle, label, labelStyle, ...rest }
) => {
    return (
        <Button style={buttonStyle ? buttonStyle : styles.btnStyle} onPress={onSubmit} {...rest}>
            {isLoading ? (
                <Loader color={Colors.WHITE} />
            ) : icon ? (
                icon
            ) : (
                        <Text style={[{ fontFamily: Fonts.MEDIUM, marginTop: Platform.OS === 'android' ? 0 : 4 }, labelStyle]}>{label}</Text>
                    )}
        </Button>
    );
};

const styles = StyleSheet.create({
    btnStyle: {
        width: 65,
        height: 65,
        borderRadius: 18,
        backgroundColor: Colors.PRIMARY,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        shadowColor: '#382D7C',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 0.29,
        elevation: 8,
    }
});


export default ThemeButton;
