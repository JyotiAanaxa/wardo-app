import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors, Fonts, Typography } from '../../theme';

export const GreyCard = ({ height, title, icon, handleSubmit }) => {
    return (
        <TouchableOpacity onPress={handleSubmit} style={[
            styles.boxStyle,
            { height: height },
        ]} underlayColor={Colors.GREY} activeOpacity={0.6}>
            <>
                {icon}
                {title && (
                    <Text
                        style={styles.txtStyle}>
                        {title}
                    </Text>
                )}
            </>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    boxStyle: {
        justifyContent: 'space-between',
        borderRadius: 18,
        width: '95%',
        backgroundColor: Colors.GREY_CARD,
        marginTop: 8,
        marginBottom: 8,
        padding: 15,
        elevation: 2
    },
    txtStyle: {
        fontSize: Typography.SMALL,
        fontFamily: Fonts.REGULAR,
        lineHeight: 18,
        color: Colors.SECONDARY_TEXT
    }
});